'use strict';

var _  = require('underscore');
var qs = require('querystring');

var isServer = (typeof window === 'undefined');

module.exports = {
    normalize: normalize,
    params: params,
    removeParams: removeParams,
    cleanParams: cleanParams
};

function normalize(url) {
    if (url.slice(url.length - 1) === '/') {
        url = url.substring(0, url.length - 1);
    }
    if (isServer && !url) {
        url = '/';
    }
    return url;
}

function params(url, key, value) {
    var parts = url.split('?');
    var parameters = {};
    var out = [];

    out.push(parts.shift());
    if (parts.length) {
        parameters = qs.parse(parts.join('?')) || parameters;
    }
    if (_.isObject(key)) {
        parameters = _.extend(parameters, key);
    }
    else if (!value && key) {
        return parameters[key];
    }
    else if (key) {
        parameters[key] = value;
    }
    else {
        return parameters;
    }
    if (!_.isEmpty(parameters)) {
        out.push('?');
        out.push(qs.stringify(parameters));
    }
    if (url.slice(url.length - 1) === '#') {
        out.push('#');
    }
    return out.join('');
}

function removeParams(url, key) {
    var parts = url.split('?');
    var parameters = {};
    var out = [];

    out.push(parts.shift());
    if (parts.length) {
        parameters = qs.parse(parts.join('?')) || parameters;
    }
    if (_.isObject(key)) {
        parameters = _.filter(parameters, function filter(key) {
            return !_.contains(key, key);
        });
    }
    else {
        delete parameters[key];
    }
    if (!_.isEmpty(parameters)) {
        out.push('?');
        out.push(qs.stringify(parameters));
    }
    if (url.slice(url.length - 1) === '#') {
        out.push('#');
    }
    return out.join('');
}

function cleanParams(url) {
    var parts = url.split('?');
    var out = [];

    out.push(parts.shift());
    if (url.slice(url.length - 1) === '#') {
        out.push('#');
    }
    return out.join('');
}
