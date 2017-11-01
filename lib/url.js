'use strict';

let _  = require('underscore');
let qs = require('querystring');

const IS_SERVER = (typeof window === 'undefined');

function normalize(url)
{
    if (url.slice(url.length - 1) === '/') {
        url = url.substring(0, url.length - 1);
    }
    if (IS_SERVER && !url) {
        url = '/';
    }
    return url;
}

function params(url, key, value)
{
    let parts = url.split('?');
    let parameters = {};
    let out = [];

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

function removeParams(url, key)
{
    let parts = url.split('?');
    let parameters = {};
    let out = [];

    out.push(parts.shift());
    if (parts.length) {
        parameters = qs.parse(parts.join('?')) || parameters;
    }
    if (_.isObject(key)) {
        parameters = _.filter(parameters, key => {
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

function cleanParams(url)
{
    let parts = url.split('?');
    let out = [];

    out.push(parts.shift());
    if (url.slice(url.length - 1) === '#') {
        out.push('#');
    }
    return out.join('');
}

module.exports = {
    normalize,
    params,
    removeParams,
    cleanParams
};
