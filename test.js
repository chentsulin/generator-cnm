'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const pwd = path.resolve('./');


describe('generator', () => {
  let generator;

  beforeEach((done) => {
    const deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), (err) => {
      if (err) return done(err);
      generator = helpers.createGenerator('cnm:app', deps, null, { skipInstall: true });
      done();
    });
  });

  afterEach(() => {
    process.chdir(pwd);
  });

  it('generates expected files', (done) => {
    const expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.eslintrc.json',
      '.eslintignore',
      '.travis.yml',
      '.babelrc',
      'CHANGELOG.md',
      'LICENSE',
      'package.json',
      'README.md',
      path.join('src', 'index.js'),
      path.join('src', '__tests__', 'index.spec.js'),
    ];

    helpers.mockPrompt(generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: false,
    });

    generator.run(() => {
      assert.file(expected);
      assert.noFile('cli.js');
      done();
    });
  });

  it('CLI option', (done) => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: true,
      libDir: false,
      testDir: false,
    });

    generator.run(() => {
      assert.file('cli.js');
      assert.fileContent('package.json', /"bin":/);
      assert.fileContent('package.json', /"bin": "cli.js"/);
      assert.fileContent('package.json', /"meow"/);
      done();
    });
  });
});
