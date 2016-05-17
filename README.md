# generator-cnm

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Fork from [sindresorhus/generator-nm](https://github.com/sindresorhus/generator-nm) for personal usage

## Install

```sh
$ npm install -g generator-cnm
```

> Note: `generator-cnm` is a [yeoman](http://yeoman.io/) generator, so you must have global `yo` installed, too.

```sh
$ npm install -g yo
```

## Usage

```sh
$ mkdir your-module-name && cd your-module-name && yo cnm
```

# Troubleshooting

#### TypeError: this.env.adapter.prompt(...).then is not a function

Please upgrade your global `yo` npm module using `npm install -g yo`.

## License

MIT © [C.T. Lin](https://github.com/chentsulin)

[npm-image]: https://badge.fury.io/js/generator-cnm.svg
[npm-url]: https://npmjs.org/package/generator-cnm
[travis-image]: https://travis-ci.org/chentsulin/generator-cnm.svg
[travis-url]: https://travis-ci.org/chentsulin/generator-cnm
[coveralls-image]: https://coveralls.io/repos/chentsulin/generator-cnm/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/generator-cnm?branch=master
[david_img]: https://david-dm.org/chentsulin/generator-cnm.svg
[david_site]: https://david-dm.org/chentsulin/generator-cnm
