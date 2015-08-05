'use strict';

describe('orcorum', function testOrcorum() {
    describe('time', function testTime() {
        test();
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.time).to.be.instanceOf(Object);
    });

    it('should property SECOND be equal to 1000', function() {
        expect(orcorum.time.SECOND).to.equal(1000);
    });

    it('should property MINUTE be equal to 60000', function() {
        expect(orcorum.time.MINUTE).to.equal(60000);
    });

    it('should property HOUR be equal to 3600000', function() {
        expect(orcorum.time.HOUR).to.equal(3600000);
    });

    it('should property DAY be equal to 86400000', function() {
        expect(orcorum.time.DAY).to.equal(86400000);
    });

    it('should property MONTH be equal to 2592000000', function() {
        expect(orcorum.time.MONTH).to.equal(2592000000);
    });

    it('should property YEAR be equal to 31104000000', function() {
        expect(orcorum.time.YEAR).to.equal(31104000000);
    });
}