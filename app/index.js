/* eslint quote-props: 0, no-underscore-dangle: 0 */
'use strict';

const normalizeUrl = require('normalize-url');
const path = require('path');
const humanizeUrl = require('humanize-url');
const yeoman = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _s = require('underscore.string');


module.exports = yeoman.Base.extend({
  init() {
    const cb = this.async();

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter(val) {
        return _s.slugify(val);
      },
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate(val) {
        return val.length > 0 ? true : 'You have to provide a username';
      },
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate(val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
      },
      filter(val) {
        return normalizeUrl(val);
      },
    }, {
      name: 'cli',
      message: 'Do you need a CLI?',
      type: 'confirm',
      default: false,
    }, {
      name: 'libDir',
      message: 'Do you need a lib directory?',
      type: 'confirm',
      default: false,
    }, {
      name: 'testDir',
      message: 'Do you need a test directory?',
      type: 'confirm',
      default: false,
    }])
    .then((props) => {
      let asyncCount = 0;
      this.moduleName = props.moduleName;
      this.camelModuleName = _s.camelize(props.moduleName);
      this.githubUsername = props.githubUsername;
      this.name = this.user.git.name();
      this.email = this.user.git.email();
      this.website = props.website;
      this.humanizedWebsite = humanizeUrl(this.website);
      this.cli = props.cli;
      this.libDir = props.libDir;
      this.testDir = props.testDir;

      this.template('editorconfig', '.editorconfig');
      this.template('gitattributes', '.gitattributes');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('eslintignore', '.eslintignore');
      this.template('travis.yml', '.travis.yml');
      this.template('index.js');
      this.template('LICENSE');
      this.template('CHANGELOG.md');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('README.md');

      if (this.cli) {
        this.template('cli.js');
      }

      function decreaseCount() {
        asyncCount--;
        if (asyncCount === 0) cb();
      }

      if (this.libDir) {
        asyncCount++;
        mkdirp('lib', (err) => {
          if (err) console.error(err); // eslint-disable-line no-console
          this.template('_index.js', path.join('lib', 'index.js'));
          decreaseCount();
        });
      }

      if (this.testDir) {
        asyncCount++;
        mkdirp('test', (err) => {
          if (err) console.error(err); // eslint-disable-line no-console
          this.template('test.js', path.join('test', 'test.js'));
          decreaseCount();
        });
      } else {
        this.template('test.js');
      }

      if (asyncCount === 0) cb();
    });
  },
  install() {
    this.installDependencies({ bower: false });
  },
});
