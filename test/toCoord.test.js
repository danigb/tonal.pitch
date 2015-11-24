var vows = require('vows')
var assert = require('assert')
var parse = require('..').coord

vows.describe('pitch.coord').addBatch({
  'notes and intervals': function () {
    assert.deepEqual(parse('D'), [2])
    assert.deepEqual(parse('D2'), [2, 1, null])
    assert.deepEqual(parse('2M'), [2, -1])
  },
  'invalid values': function () {
    assert.equal(parse(null), null)
    assert.deepEqual(parse([2]), null)
  }
}).export(module)
