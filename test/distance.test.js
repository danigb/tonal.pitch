var vows = require('vows')
var assert = require('assert')
var distance = require('../lib/distance')

vows.describe('pitch.distance').addBatch({
  'basic': function () {
    assert.equal(distance('C2', 'D2'), '2M')
  },
  'interval distances': function () {
    assert.equal(distance('3M', '5P'), '3m')
  },
  'pitch class distance': function () {
    assert.equal(distance('C', 'D'), '2M')
    assert.equal(distance('C', 'D2'), '2M')
    assert.equal(distance('C2', 'D'), '2M')
    assert.equal(distance('C', 'c4'), '1P')
    assert.equal(distance('D', 'C'), '7m')
    assert.equal(distance('A', 'C'), '3m')
  },
  'curry': function () {
    assert.deepEqual('C2 D2 E2 F2 G2 A2 B2 C3'.split(' ').map(distance('C2')),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'])
  },
  'invalid values': function () {
    assert.equal(distance(null, 'C2'), null)
    assert.equal(distance('blah', 'C3'), null)
  }
}).export(module)
