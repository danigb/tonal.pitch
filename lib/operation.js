var coord = require('./coord')
var str = require('./str')

function curry (fn, arity) {
  if (arity === 1) return fn
  return function (a, b) {
    if (arguments.length === 1) return function (c) { return fn(a, c) }
    return fn(a, b)
  }
}

/**
 * Decorate a function to work with pitches in coord notation
 *
 * @name pitch.operation
 * @function
 */
module.exports = function (fn) {
  return curry(function (a, b) {
    var ac = coord(a)
    var bc = coord(b)
    if (!ac && !bc) return fn(a, b)
    var v = fn(ac || a, bc || b)
    return str(v) || v
  }, fn.length)
}
