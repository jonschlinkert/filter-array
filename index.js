/*!
 * filter-array <https://github.com/jonschlinkert/filter-array>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var makeIterator = require('make-iterator');

module.exports = function filter(arr, cb, thisArg) {
  cb = makeIterator(cb, thisArg);
  if (arr == null) {
    return [];
  }

  var len = arr.length;
  var i = 0;
  var res = [];
  var val;

  while (len--) {
    val = arr[i++];
    if (cb(val, i, arr)) {
      res.push(val);
    }
  }

  return res;
};
