# jasonderulo
Rule based json transformer

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![JavaScript Style Guide][standardjs-badge]][standardjs-url]

This module is currently in development...

# Installation

```
npm i jasonderulo
```


# Examples

## Basic transformation

```javascript
var jasonderulo = require('jasonderulo')

var from = {
  a: {
    B: {
      c: 'value c'
    }
  }
}
var transformation = {
  targetProp: 'a.B.c'
}

console.log(jasonderulo.basicTransform(from, transformation))

// { targetProp: 'value c' }

```


[npm-badge]: https://badge.fury.io/js/jasonderulo.svg
[npm-url]: https://badge.fury.io/js/jasonderulo
[travis-badge]: https://travis-ci.org/orangewise/jasonderulo.svg?branch=master
[travis-url]: https://travis-ci.org/orangewise/jasonderulo
[standardjs-badge]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/

