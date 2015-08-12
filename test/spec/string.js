'use strict';

describe('orcorum', function testOrcorum() {
    describe('string', function testString() {
        test();
        describe('#startsWith', testStartsWith);
        describe('#endsWith', testEndsWith);
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.string).to.be.instanceOf(Object);
    });
}

function testStartsWith() {
    it('check if "/path/to" start with "/path"', function() {
        expect(orcorum.string.startsWith('/path/to', '/path')).to.be.ok;
    });

    it('check if "/path/to" does not start with "/to"', function() {
        expect(orcorum.string.startsWith('/path/to', '/to')).to.not.be.ok;
    });
}

function testEndsWith() {
    it('check if "/path/to" end with "/to"', function() {
        expect(orcorum.string.endsWith('/path/to', '/to')).to.be.ok;
    });

    it('check if "/path/to" does not end with "/path"', function() {
        expect(orcorum.string.endsWith('/path/to', '/path')).to.not.be.ok;
    });
}
