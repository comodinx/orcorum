'use strict';

var classes = require('./classes');
var object = require('./object');
var string = require('./string');
var time = require('./time');
var url = require('./url');
var fs = require('./fs');


var VERSION = '0.1.9';
var isServer = (typeof window === 'undefined');

module.exports = {
    VERSION: VERSION,
    isServer: isServer,
    classes: classes,
    object: object,
    string: string,
    time: time,
    url: url,
    fs: fs,
    noop: noop
};

function noop() {}
