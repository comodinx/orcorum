# orcorum v0.1.6

Helper library for JavaScript

## API

### orcorum.classes

#### extend(properties, [statics])

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

#### get(target, keys, [defaultValue])

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
