/*!
 * array-filter <https://github.com/jonschlinkert/array-filter>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var filter = require('./');

describe('filter', function () {
  it('should filter an array:', function () {
    var res = filter(['a', 'b', 'c', 'b', 'c', 'e'], function (ele) {
      return ele === 'a' || ele === 'b';
    });

    res.should.eql(['a', 'b', 'b']);
  });
});
