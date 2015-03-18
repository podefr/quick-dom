/**
 * quick-dom.js - http://podefr.github.com/quick-dom/
 * Copyright(c) 2013-2015 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
"use strict";

var jsdom = require("jsdom").jsdom;
GLOBAL.document = jsdom("<html><head></head><body></body></html>");
GLOBAL.window = document.parentWindow;

module.exports = jsdom;