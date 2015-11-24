var ncrd = require('tonal.notation/note.coord')
var icrd = require('tonal.notation/interval.coord')

/**
 * Convert a note or interval string to a [pitch in coord notation]()
 *
 * @name pitch.coord
 * @function
 * @param {String} pitch - the note or interval to parse
 * @return {Array} the pitch in array notation
 *
 * @example
 * pitch.coord('C2') // => [0, 2, null]
 * pitch.coord('5P') // => [1, 0]
 */
module.exports = function (n) { return ncrd(n) || icrd(n) }
