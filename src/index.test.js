const test = require('blue-tape')
const testBed = require('.')

test('testBed', assert => {
    assert.equal(
        testBed.test(),
        1,
        'equals 1!',
    )
    assert.end()
})
