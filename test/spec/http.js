'use strict';

describe('orcorum', function testOrcorum() {
    describe('http', function testHTTP() {
        test();
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.http).to.be.instanceOf(Object);
    });

    it('should property method.GET be equal to "get"', function() {
        expect(orcorum.http.method.GET).to.equal('get');
    });

    it('should property status.SUCCESS be equal to 200', function() {
        expect(orcorum.http.status.SUCCESS).to.equal(200);
    });

    it('should property type.MULTIPART be equal to "multipart/form-data"', function() {
        expect(orcorum.http.type.MULTIPART).to.equal('multipart/form-data');
    });
}
