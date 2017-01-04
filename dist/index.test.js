'use strict';

import test from 'tape';
import testBed from '.';

test('testBed', function (assert) {
    assert.equal(testBed.test(), 2, 'equals 2!');
    assert.end();
});