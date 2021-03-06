'use strict';

describe('orcorum', function testOrcorum() {
    describe('object', function testObject() {
        test();
        describe('#extend', testExtent);
        describe('#get', testGet);
        describe('#set', testSet);
    });
});

var person = {
    name: {
        first: 'pepito',
        last: 'roman'
    },
    age: 3
};

function test() {
    it('should be an object', function() {
        expect(orcorum.object).to.be.instanceOf(Object);
    });
}

function testExtent() {
    it('should overwrite property "age" with value 4', function() {
        expect(orcorum.object.extend(_.clone(person), {
            age: 4
        })).to.deep.equal({
            name: {
                first: 'pepito',
                last: 'roman'
            },
            age: 4
        });
    });

    it('should overwrite property ["name", "last"] with value "robin"', function() {
        expect(orcorum.object.extend(_.clone(person), {
            name: {
                last: 'robin'
            }
        })).to.deep.equal({
            name: {
                first: 'pepito',
                last: 'robin'
            },
            age: 3
        });
    });
}

function testGet() {
    it('should property "age" return 3', function() {
        expect(orcorum.object.get(person, 'age')).to.equal(3);
    });

    it('should property ["name", "first"] return "pepito"', function() {
        expect(orcorum.object.get(person, ['name', 'first'])).to.equal('pepito');
    });

    it('should property ["works", "first", "beginDate"] be undefined', function() {
        expect(orcorum.object.get(person, ['works', 'first', 'beginDate'])).to.not.be.ok;
    });

    it('should property ["name", "alias"] is undefined, but get method return default value "pepe"', function() {
        expect(orcorum.object.get(person, ['name', 'alias'], 'pepe')).to.equal('pepe');
    });
}

function testSet() {
    it('after set "name" in person, it should return the property value "josecito"', function() {
        var person = {
            name: {
                first: 'pepito',
                last: 'roman'
            },
            age: 3
        };
        orcorum.object.set(person, 'name', 'josecito');
        expect(person).to.have.deep.property('name', 'josecito');
    });

    it('after set ["name", "first"] in person, it should return the property value "josecito"', function() {
        var person = {
            name: {
                first: 'pepito',
                last: 'roman'
            },
            age: 3
        };
        orcorum.object.set(person, ['name', 'first'], 'josecito');
        expect(person).to.have.deep.property('name.first', 'josecito');
    });

    it('after set ["works", "first", "beginDate"] in person, it should return the property value current Date', function() {
        var person = {
            name: {
                first: 'pepito',
                last: 'roman'
            },
            age: 3
        };
        orcorum.object.set(person, ['works', 'first', 'beginDate'], new Date());
        expect(person).to.have.deep.property('works.first.beginDate');
    });
}
