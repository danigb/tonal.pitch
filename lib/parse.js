var ncrd = require('tonal.notation/note.parse')
var icrd = require('tonal.notation/interval.parse')

/**
 * Convert a note or interval string to a [pitch in coord notation]()
 *
 * @name pitch.parse
 * @function
 * @param {String} pitch - the note or interval to parse
 * @return {Array} the pitch in array notation
 *
 * @example
 * pitch.parse('C2') // => [0, 2, null]
 * pitch.parse('5P') // => [1, 0]
 */
module.exports = function (n) { return ncrd(n) || icrd(n) }
