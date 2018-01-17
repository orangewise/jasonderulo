var test = require('tape')
var jasonderulo = require('../.')

test('basic transform', function (t) {
  t.plan(1)
  var from = {
    a: {
      B: {
        c: 'value c'
      }
    }
  }
  var expected = {
    targetProp: 'value c'
  }
  var transformation = {
    targetProp: 'a.B.c'
  }
  var transformedJson = jasonderulo.basicTransform(from, transformation)
  t.deepEqual(transformedJson, expected, 'basic transform works')
})

test('getProp', function (t) {
  t.plan(4)
  var v = jasonderulo.getProp({ a: 1 }, 'a')
  t.equal(1, v, 'get simple prop value')
  v = jasonderulo.getProp({ a: { b: 2 } }, 'a.b')
  t.equal(2, v, 'get nested prop value')
  v = jasonderulo.getProp({ a: { B: { c: 3 } } }, 'a.B.c')
  t.equal(3, v, 'prop keys are case sensitive')
  v = jasonderulo.getProp({ a: { B: { c: 3 } } }, 'a.B')
  t.deepEqual({ c: 3 }, v, 'get objects too')
})
