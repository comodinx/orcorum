'use strict';

let _ = require('underscore');

function extend(properties, statics)
{
    let parent = this;
    let Surrogate;
    let subclass;

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
}

module.exports = {
    extend
};
