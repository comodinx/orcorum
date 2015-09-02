'use strict';

var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var defaultOptions = {
    excludes: ['index'],
    extension: '.js'
};

module.exports = {
    requiredirSync: requiredirSync
};

function requiredirSync(dirname, options) {
    var files = {};

    options = _.defaults(options || {}, defaultOptions);

    fs.readdirSync(dirname).forEach(function each(filename) {
        var abspath = dirname + '/' + filename;
        var name = path.basename(filename, options.extension);
        var extension = path.extname(filename);

        if (fs.statSync(abspath).isDirectory()) {
            return files[filename] = requiredirSync(abspath);
        }
        if (_.contains(options.excludes, name) || extension !== options.extension) {
            return;
        }
        files[name] = require(abspath);
    });
    return files;
}
