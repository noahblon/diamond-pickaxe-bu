'use strict';

var test = require('tape')
var testBed = require('.')

test('testBed', function (assert) {
  assert.equal(
      testBed.test(),
      2,
      'equals 2!'
  )
  assert.end()
})
