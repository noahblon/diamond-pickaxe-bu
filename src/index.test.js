const test = require('blue-tape')
const testBed = require('.')

test('testBed', assert => {
    assert.equal(
        testBed.test(),
        2,
        'equals 2!',
    )
    assert.end()
})
