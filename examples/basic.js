var jasonderulo = require('../.')

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
