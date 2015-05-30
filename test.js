'use strict'

var path = require('path')
var helpers = require('yeoman-generator').test
var assert = require('yeoman-assert')

describe('generator', function () {
	beforeEach(function (cb) {
		var deps = ['../app']

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) return cb(err)
			this.generator = helpers.createGenerator('cnm:app', deps, null, { skipInstall: true })
			cb()
		}.bind(this))
	})

	it('generates expected files', function (cb) {
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
		]

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: false
		})

		this.generator.run(function () {
			assert.file(expected)
			cb()
		})
	})

	it('CLI option', function (cb) {
		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: true
		})

		this.generator.run(function () {
			assert.file('cli.js')
			assert.fileContent('package.json', /"bin":/)
			assert.fileContent('package.json', /"bin": "cli.js"/)
			assert.fileContent('package.json', /"meow"/)
			cb()
		})
	})
})
