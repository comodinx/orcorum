'use strict';

var _ = require('underscore');
var slice = Array.prototype.slice;

module.exports = {
    get: get,
    extend: extend
};

function get(target, keys, defaultValue) {
    var value;

    if (!_.isArray(keys)) {
        keys = [keys];
    }
    if (!keys.length) {
        return defaultValue;
    }
    keys.every(function every(key, index) {
        try {
            if (!index) {
                value = target[key];
            }
            else {
                value = value[key];
            }
        }
        catch (err) {
            value = null;
            return false;
        }
        return true;
    });
    if (typeof value === 'undefined' || value === null) {
        return defaultValue;
    }
    return _.isFunction(value) ? value : _.clone(value);
}

function extend(target /* *sources*/) {
    _.each(slice.call(arguments, 1), function eachSources(source) {
        if (source) {
            _.each(source, function eachSource(value, key) {
                if (isObject(value) && isObject(target[key])) {
                    return (target[key] = extend(_.clone(target[key]), value));
                }
                target[key] = value;
            });
        }
    });
    return target;
}

function isObject(obj) {
    return _.isObject(obj) && !_.isArray(obj);
}
