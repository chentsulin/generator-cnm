'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var pwd = path.resolve('./');


describe('generator', function() {

  beforeEach(function(cb) {
    var deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) return cb(err);
      this.generator = helpers.createGenerator('cnm:app', deps, null, { skipInstall: true });
      cb();
    }.bind(this));
  });

  afterEach(function() {
    process.chdir(pwd);
  });

  it('generates expected files', function(cb) {
    var expected = [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.eslintrc',
			'.travis.yml',
			'CHANGELOG.md',
			'index.js',
			'LICENSE',
			'package.json',
			'README.md',
			'test.js'
		];

    helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: false,
      libDir: false,
      testDir: false
		});

    this.generator.run(function() {
      assert.file(expected);
      assert.noFile('cli.js');
      cb();
    });
  });

  it('CLI option', function(cb) {
    helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: true,
      libDir: false,
      testDir: false
		});

    this.generator.run(function() {
      assert.file('cli.js');
      assert.fileContent('package.json', /"bin":/);
      assert.fileContent('package.json', /"bin": "cli.js"/);
      assert.fileContent('package.json', /"meow"/);
      cb();
    });
  });

  it('lib directory option', function(cb) {
    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: true,
      libDir: true,
      testDir: false
    });

    this.generator.run(function() {
      assert.file(path.join('lib', 'index.js'));
      cb();
    });
  });

  it('test directory option', function(cb) {
    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: false,
      libDir: false,
      testDir: true
    });

    this.generator.run(function() {
      assert.file(path.join('test', 'test.js'));
      assert.noFile('test.js');
      cb();
    });
  });
});
