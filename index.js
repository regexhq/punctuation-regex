/*!
 * punctuation-regex <https://github.com/regexps/punctuation-regex>
 *
 * Copyright (c) 2016 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(extended) {
  return extended === true
    ? /^[\‒\–\—\―|$&~=\\\/⁄@+*!?({[\]})<>‹›«».;:^‘’“”'",،、`·\•†‡°″¡¿※#№÷×%‰\−‱¶′‴§_‖¦]+$/
    : /^[!"#$%&'()*+,./:;<=>?@\^_`{|}~\-]+$/;
};
