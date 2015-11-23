var vows = require('vows')
var assert = require('assert')
var parse = require('..').toCoord

vows.describe('itc').addBatch({
  'invalid values': function () {
    assert.equal(parse(null), null)
    assert.equal(parse([0]), null)
  }
}).export(module)
