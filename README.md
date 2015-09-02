orcorum [![NPM Version](https://img.shields.io/npm/v/orcorum.svg?style=flat)](https://www.npmjs.com/package/orcorum)
=======

Helper library for JavaScript


Installing
----------

```
npm install orcorum
```


Running the tests
-----------------

```
npm test
```


API
---

### orcorum.classes

#### extend(properties[, statics])

To create a class of your own base class, you extend your base class and provide instance properties, as well as optional statics to be attached directly to the constructor function.

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
};

Animal.extend = orcorum.classes.extend;

// ...

var Dog = Animal.extend({
    bark: function() {
        return 'GUAUUU!!!'
    }
});

var dog = new Dog('pepito');

console.log(dog.name); // => pepito

console.log(dog.bark()); // => GUAUUU!!!
```

### orcorum.object

#### get(target, keys[, defaultValue])

Get property of target.

```javascript
orcorum.object.get({
    name: 'pepito',
    age: 3
}, 'age'); // => 3

orcorum.object.get({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, ['name', 'first']); // => pepito

orcorum.object.get({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, ['name', 'alias'], 'pepe'); // => pepe

orcorum.object.get({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, ['works', 'first', 'beginDate']); // => undefined
```

#### set(target, keys, value)

Set property in target.

```javascript
orcorum.object.set({
    name: 'pepito',
    age: 3
}, 'name', 'josecito'); // => {name: 'josecito', age: 3}

orcorum.object.set({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, ['name', 'first'], 'josecito'); // => {name: {first: 'josecito', last: 'roman'}, age: 3}

orcorum.object.set({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, ['name', 'alias'], 'pepe'); // => {name: {first: 'pepito', last: 'roman', alias: 'pepe'}, age: 3}
```

#### extend(target, *sources)

Override properties of target with the all properties in the source objects (in-order), and return the target object.

```javascript
orcorum.object.extend({
    name: 'pepito',
    age: 3
}, {
    age: 4
}); // => {name: 'pepito', age: 4}

orcorum.object.extend({
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
}, {
    name: {
        last: 'robin'
    }
}); // => {name: {first: 'pepito', last: 'robin'}, age: 3}
```

### orcorum.string

#### startsWith(str, starts)

Checks whether the `str` begins with `starts`.

```javascript
console.log(orcorum.string.startsWith('/path/to', '/')); // => true
console.log(orcorum.string.startsWith('/path/to', '/path')); // => true
console.log(orcorum.string.startsWith('/path/to', '/to')); // => false
```

#### endsWith(str, ends)

Checks whether the `str` ends with `ends`.

```javascript
console.log(orcorum.string.endsWith('/path/to', 'o')); // => true
console.log(orcorum.string.endsWith('/path/to', '/to')); // => true
console.log(orcorum.string.endsWith('/path/to', '/path')); // => false
```

### orcorum.url

#### normalize(url)

Normalize url path.

```javascript
console.log(orcorum.url.normalize('')); // => Client size '' - Server side '/'
console.log(orcorum.url.normalize('/path/to')); // => /path/to
console.log(orcorum.url.normalize('/path/to/')); // => /path/to
console.log(orcorum.url.normalize('http://www.mysite.com')); // => http://www.mysite.com
```

#### params(url, key, value)

Add or return url params.

```javascript
console.log(orcorum.url.params('')); // => {}
console.log(orcorum.url.params('/path/to?search=auto')); // => {search: 'auto'}
console.log(orcorum.url.params('/path/to?search=auto&country=ar', 'country')); // => ar
console.log(orcorum.url.params('/path/to?search=auto&country=ar', 'country', 'en')); // => /path/to?search=auto&country=en
console.log(orcorum.url.params('/path/to', {
    search: 'auto',
    country: 'ar'
})); // => /path/to?search=auto&country=ar
```

#### removeParams(url, key)

Remove url params.

```javascript
console.log(orcorum.url.removeParams('/path/to?search=auto&country=ar', 'country')); // => /path/to?search=auto
console.log(orcorum.url.removeParams('/path/to?search=auto', 'search')); // => /path/to
```

#### cleanParams(url)

Remove all url params.

```javascript
console.log(orcorum.url.cleanParams('/path/to?search=auto&country=ar')); // => /path/to
console.log(orcorum.url.cleanParams('/path/to?search=auto')); // => /path/to
```

### orcorum.time

#### SECONDS, MINUTE, HOUR, DAY, MONTH and YEAR

Time in milliseconds.

```javascript
console.log(orcorum.time.SECOND); // => 1000
console.log(orcorum.time.MINUTE); // => 60000
console.log(orcorum.time.HOUR);   // => 3600000
console.log(orcorum.time.DAY);    // => 86400000
console.log(orcorum.time.MONTH);  // => 2592000000
console.log(orcorum.time.YEAR);   // => 31104000000
```

### orcorum.fs

#### requiredirSync(dirname[, options])

Requires all files in a directory into an object with the same structure.

##### Options

* `excludes` Files excludes. Defaults to `['index']`.
* `extension` Files extension. Only require the file match with this extension. Defaults to `'.js']`.

```javascript
orcorum.fs.requiredirSync(__dirname);

// Or 
orcorum.fs.requiredirSync(__dirname, {
    excludes: ['my_exclude_file']
});

// Or 
orcorum.fs.requiredirSync(__dirname, {
    extension: '.json'
});
```
