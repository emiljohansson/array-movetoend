"use strict";

var test = require('tape');
var moveToEnd = require('./');

test('exist', function(t) {
    t.equal(typeof moveToEnd, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(moveToEnd(), undefined);
    t.equal(moveToEnd(null), undefined);
    t.equal(moveToEnd({}), undefined);
    t.equal(moveToEnd({
        style: {}
    }), undefined);
    t.end();
});

test('move item to end', function(t) {
    t.deepEqual(moveToEnd([3], 2), [3]);
    t.deepEqual(moveToEnd([1, 2, 3], 0), [2, 3, 1]);
    t.deepEqual(moveToEnd([1, 2, 3], 1), [1, 3, 2]);
    t.deepEqual(moveToEnd([1, 2, 3], 2), [1, 2, 3]);
    t.end();
});
