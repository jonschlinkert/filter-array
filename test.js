/**
 * filter-array <https://github.com/jonschlinkert/filter-array>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/* deps: mocha istanbul-harmony */
var assert = require('assert');
var filter = require('./index');

describe('filter', function() {
  it('should return empty array if empty array is given', function(done) {
    var actual = filter([]);
    var expected = [];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should return empty array no function, string, regex or array given', function(done) {
    var actual = filter({one: 'two'});
    var expected = [];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should filter an array when function given', function(done) {
    var actual = filter(['a', 'b', 'c', 'b', 'c', 'e'], function(ele) {
      return ele === 'a' || ele === 'b';
    });
    var expected = ['a', 'b', 'b'];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should filter an array with regex', function(done) {
    var actual = filter(['a', 'b', 'c', 'b', 'b', 'f'], /(a|b)/);
    var expected = ['a', 'b', 'b', 'b'];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should filter an array when glob string given', function(done) {
    var actual = filter(['a', 'b', 'c', 'b', 'c', 'e'], '{a,b}');
    var expected = ['a', 'b', 'b'];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should filter an array when array of glob patterns given', function(done) {
    var actual = filter(['a', 'b', 'c', 'd', 'e', 'f', 'g'], ['{a..g}', '![b-e]']);
    var expected = ['a', 'f', 'g'];

    assert.deepEqual(actual, expected);
    done();
  });
});
