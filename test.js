/*!
 * punctuation-regex <https://github.com/regexps/punctuation-regex>
 *
 * Copyright (c) 2016 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var regex = require('./');

describe('punctuation-regex', function() {
  it('should match punctuation', function () {
    assert(!regex().test('foo'));
    assert(!regex().test('bar!'));
    assert(regex().test('!'));
    assert(regex().test('@'));
    assert(regex().test('$'));
    assert(regex().test('&'));
    assert(regex().test('/'));
    assert(regex().test('*'));
  });
});
