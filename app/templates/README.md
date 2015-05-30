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

[npm-image]: https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square
[npm-url]: https://npmjs.org/package/<%= moduleName %>
[travis-image]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[coveralls-image]: https://img.shields.io/coveralls/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/<%= githubUsername %>/<%= moduleName %>
[david_img]: https://img.shields.io/david/<%= githubUsername %>/<%= moduleName %>.svg
[david_site]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>

