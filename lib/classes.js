'use strict';

var _ = require('underscore');

module.exports = {
    extend: extend
};

function extend(properties, statics) {
    var parent = this;
    var Surrogate;
    var subclass;

    if (properties && _.has(properties, 'constructor')) {
        subclass = properties.constructor;
    }
    else {
        subclass = function() {
            return parent.apply(this, arguments);
        };
    }

    _.extend(subclass, parent, statics);

    Surrogate = function() {
        this.constructor = subclass;
    };
    Surrogate.prototype = parent.prototype;
    subclass.prototype = new Surrogate;

    if (properties) {
        _.extend(subclass.prototype, properties);
    }
    subclass.__super__ = parent.prototype;
    return subclass;
  };
