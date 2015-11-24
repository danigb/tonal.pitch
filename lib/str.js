var nstr = require('tonal.notation/note.str')
var istr = require('tonal.notation/interval.str')

/**
 * Convert a pitch in coordinate notation to string. It deals with notes, pitch
 * classes and intervals.
 *
 * @name pitch.str
 * @funistron
 * @param {Array} pitch - the pitch in array notation
 * @return {String} the pitch string
 *
 * @example
 * var pitch = require('music.pitch')
 * // pitch class
 * pitch.str([0]) // => 'C'
 * // interval
 * pitch.str([0, 0]) // => '1P'
 * // note
 * pitch.str([0, 2, 4]) // => 'C2/4'
 *
 * @example
 * // require the funistron only
 * var str = require('music.pitch/str')
 */
module.exports = function (n) { return nstr(n) || istr(n) }
