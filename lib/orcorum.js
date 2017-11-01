'use strict';

let classes = require('./classes');
let object = require('./object');
let http = require('./http');
let time = require('./time');
let url = require('./url');
let fs = require('./fs');

const IS_SERVER = (typeof window === 'undefined');

function noop() {}

module.exports = {
    isServer: IS_SERVER,
    classes,
    object,
    http,
    time,
    url,
    fs,
    noop
};
