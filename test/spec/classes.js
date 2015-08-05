'use strict';

describe('orcorum', function testOrcorum() {
    describe('classes', function testClasses() {
        test();
        describe('#extend', testExtend);
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.classes).to.be.instanceOf(Object);
    });
}

function testExtend() {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.getName = function() {
        return this.name;
    };

    Animal.extend = orcorum.classes.extend;

    var Dog = Animal.extend({
        bark: function() {
            return 'GUAUUU!!!'
        }
    }, {
        heHatesCats: true
    });
    var dog = new Dog('pepito');

    it('should have property "heHatesCats" in Dog class', function() {
        expect(Dog.heHatesCats).to.be.ok;
    });

    it('should not have property "heHatesCats" in Animal class', function() {
        expect(Animal.heHatesCats).to.not.be.ok;
    });

    it('should have property "name" in dog instance equals to "pepito"', function() {
        expect(dog.name).to.equal('pepito');
    });

    it('after invoke function "bark" in dog instance, it should return the value "GUAUUU!!!"', function() {
        expect(dog.bark()).to.equal('GUAUUU!!!');
    });
}
