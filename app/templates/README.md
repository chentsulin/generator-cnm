# <%= moduleName %>

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> My module


## Install

```
$ npm install <%= moduleName %>
```


## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('test');
//=>
```
<% if (cli) { %>

## CLI

```
$ npm install -g <%= moduleName %>
```
```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Example
    <%= moduleName %>
    unicorns & rainbows

    <%= moduleName %> ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```
<% } %>

## API

### <%= camelModuleName %>(input, [options])

#### input

*Required*
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](<%= website %>)

[npm-image]: https://badge.fury.io/js/<%= moduleName %>.svg
[npm-url]: https://npmjs.org/package/<%= moduleName %>
[travis-image]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[coveralls-image]: https://coveralls.io/repos/<%= githubUsername %>/<%= moduleName %>/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/<%= githubUsername %>/<%= moduleName %>?branch=master
[david_img]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg
[david_site]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>

