'use strict';

var classes = require('./classes');
var object = require('./object');
var time = require('./time');
var url = require('./url');


var VERSION = '0.1.6';
var isServer = (typeof window === 'undefined');

module.exports = {
    VERSION: VERSION,
    isServer: isServer,
    classes: classes,
    object: object,
    time: time,
    url: url,
    noop: noop
};

function noop() {}
