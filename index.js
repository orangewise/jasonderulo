var jasonderulo = {}

jasonderulo.basicTransform = basicTransform
jasonderulo.getProp = getProp

module.exports = jasonderulo

function basicTransform (json, transform) {
  var transformed = {}
  Object.keys(transform).forEach(function (key) {
    transformed[key] = getProp(json, transform[key])
  })
  return transformed
}

function getProp (object, keys) {
  keys = Array.isArray(keys) ? keys : keys.split('.')
  object = object[keys[0]]
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1))
  }
  return object
}
