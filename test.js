'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const pwd = path.resolve('./');


describe('generator', () => {
  beforeEach((done) => {
    const deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), (err) => {
      if (err) return done(err);
      this.generator = helpers.createGenerator('cnm:app', deps, null, { skipInstall: true });
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
      '.eslintrc',
      '.eslintignore',
      '.travis.yml',
      'CHANGELOG.md',
      'index.js',
      'LICENSE',
      'package.json',
      'README.md',
      'test.js',
    ];

    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: false,
      libDir: false,
      testDir: false,
    });

    this.generator.run(() => {
      assert.file(expected);
      assert.noFile('cli.js');
      done();
    });
  });

  it('CLI option', (done) => {
    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: true,
      libDir: false,
      testDir: false,
    });

    this.generator.run(() => {
      assert.file('cli.js');
      assert.fileContent('package.json', /"bin":/);
      assert.fileContent('package.json', /"bin": "cli.js"/);
      assert.fileContent('package.json', /"meow"/);
      done();
    });
  });

  it('lib directory option', (done) => {
    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: true,
      libDir: true,
      testDir: false,
    });

    this.generator.run(() => {
      assert.file(path.join('lib', 'index.js'));
      assert.fileContent('index.js', /module\.exports/);
      assert.fileContent('package.json', /"lib\/"/);
      done();
    });
  });

  it('test directory option', (done) => {
    helpers.mockPrompt(this.generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      cli: false,
      libDir: false,
      testDir: true,
    });

    this.generator.run(() => {
      assert.file(path.join('test', 'test.js'));
      assert.noFile('test.js');
      done();
    });
  });
});
