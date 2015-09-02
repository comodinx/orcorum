'use strict';

describe('orcorum', function testOrcorum() {
    describe('fs', function testFs() {
        test();
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.fs).to.be.instanceOf(Object);
    });

    it('should require all files in directory', function() {
        var files = orcorum.fs.requiredirSync(__dirname + '/../../lib', {
            excludes: ['orcorum']
        });

        expect(files).to.have.deep.property('fs.requiredirSync');
    });
}