var expect = require('chai').expect;
var GlyphIconAPI = require('../../../../app/view/panel/GlyphIconAPI');
var GlyphIconFactory = require('../../../../app/view/panel/utils/element/GlyphIconFactory');

describe('Glyph Icon API', function () {

    it('should provide access to glyph icon factory', function () {
        expect(GlyphIconAPI).to.equal(GlyphIconFactory);
    });
});