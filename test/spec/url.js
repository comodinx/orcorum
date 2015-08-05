'use strict';

describe('orcorum', function testOrcorum() {
    describe('url', function testUrl() {
        test();
        describe('#normalize', testNormalize);
        describe('#params', testParams);
        describe('#removeParams', testRemoveParams);
        describe('#cleanParams', testCleanParams);
    });
});

function test() {
    it('should be an object', function() {
        expect(orcorum.url).to.be.instanceOf(Object);
    });
}

function testNormalize() {
    it('should normalize "" return the value "' + (orcorum.isServer ? '/' : '') + '"', function() {
        expect(orcorum.url.normalize('')).to.equal(orcorum.isServer ? '/' : '');
    });

    it('should normalize "/path/to" return the value "/path/to"', function() {
        expect(orcorum.url.normalize('/path/to')).to.equal('/path/to');
    });

    it('should normalize "/path/to/" return the value "/path/to"', function() {
        expect(orcorum.url.normalize('/path/to/')).to.equal('/path/to');
    });

    it('should normalize "http://www.mysite.com" return the value "http://www.mysite.com"', function() {
        expect(orcorum.url.normalize('http://www.mysite.com')).to.equal('http://www.mysite.com');
    });
}

function testParams() {
    it('should path "" be return {}', function() {
        expect(orcorum.url.params('')).to.deep.equal({});
    });

    it('should path "/path/to?search=auto" be return {search: "auto"}', function() {
        expect(orcorum.url.params('/path/to?search=auto')).to.deep.equal({
            search: 'auto'
        });
    });

    it('should property "country" from params of path "/path/to?search=auto&country=ar" be return "ar"', function() {
        expect(orcorum.url.params('/path/to?search=auto&country=ar', 'country')).to.equal('ar');
    });

    it('after change param "country" to "en" from path "/path/to?search=auto&country=ar" it should return "/path/to?search=auto&country=en"', function() {
        expect(orcorum.url.params('/path/to?search=auto&country=ar', 'country', 'en')).to.equal('/path/to?search=auto&country=en');
    });

    it('after set params "country" and "search" in path "/path/to" it should return "/path/to?search=auto&country=ar"', function() {
        expect(orcorum.url.params('/path/to', {
            search: 'auto',
            country: 'ar'
        })).to.equal('/path/to?search=auto&country=ar');
    });
}

function testRemoveParams() {
    it('after remove param "country" from path "/path/to?search=auto&country=ar" it should return "/path/to?search=auto"', function() {
        expect(orcorum.url.removeParams('/path/to?search=auto&country=ar', 'country')).to.equal('/path/to?search=auto');
    });
}

function testCleanParams() {
    it('after clean all params from path "/path/to?search=auto&country=ar" it should return "/path/to"', function() {
        expect(orcorum.url.cleanParams('/path/to?search=auto&country=ar')).to.equal('/path/to');
    });
}
