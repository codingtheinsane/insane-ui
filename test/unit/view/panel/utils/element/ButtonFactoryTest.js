var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ButtonFactory = require('../../../../../../app/view/panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('../../../../../../app/view/panel/utils/element/GlyphIconFactory');

describe('Button Factory', function () {

    jsdom();

    it('should create button', function (done) {
        var button = ButtonFactory.createButton('button-id', 'Back', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button">Back</button>');
        button.click();
    });

    it('should create primary button', function (done) {
        var button = ButtonFactory.createPrimaryButton('button-id', 'Search', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button">Search</button>');
        button.click();
    });

    it('should create success button', function (done) {
        var button = ButtonFactory.createSuccessButton('button-id', 'Save', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button">Save</button>');
        button.click();
    });

    it('should create info button', function (done) {
        var button = ButtonFactory.createInfoButton('button-id', 'Bookmark', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button">Bookmark</button>');
        button.click();
    });

    it('should create warning button', function (done) {
        var button = ButtonFactory.createWarningButton('button-id', 'Flag', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button">Flag</button>');
        button.click();
    });

    it('should create danger button', function (done) {
        var button = ButtonFactory.createDangerButton('button-id', 'Delete', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button">Delete</button>');
        button.click();
    });

    it('should create button with glyph icon', function (done) {
        var button = ButtonFactory.createButtonWithGlyphIcon('button-id', GlyphIconFactory.ARROW_LEFT(), 'Back', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button"><span class="glyphicon glyphicon-arrow-left"></span> Back</button>');
        button.click();
    });

    it('should create primary button with glyph icon', function (done) {
        var button = ButtonFactory.createPrimaryButtonWithGlyphIcon('button-id', GlyphIconFactory.SEARCH(), 'Search', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-search"></span> Search</button>');
        button.click();
    });

    it('should create success button with glyph icon', function (done) {
        var button = ButtonFactory.createSuccessButtonWithGlyphIcon('button-id', GlyphIconFactory.SAVE_FILE(), 'Save', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button"><span class="glyphicon glyphicon-save-file"></span> Save</button>');
        button.click();
    });

    it('should create info button with glyph icon', function (done) {
        var button = ButtonFactory.createInfoButtonWithGlyphIcon('button-id', GlyphIconFactory.PAPERCLIP(), 'Bookmark', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button"><span class="glyphicon glyphicon-paperclip"></span> Bookmark</button>');
        button.click();
    });

    it('should create warning button with glyph icon', function (done) {
        var button = ButtonFactory.createWarningButtonWithGlyphIcon('button-id', GlyphIconFactory.FLAG(), 'Flag', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button"><span class="glyphicon glyphicon-flag"></span> Flag</button>');
        button.click();
    });

    it('should create danger button with glyph icon', function (done) {
        var button = ButtonFactory.createDangerButtonWithGlyphIcon('button-id', GlyphIconFactory.REMOVE(), 'Delete', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button"><span class="glyphicon glyphicon-remove"></span> Delete</button>');
        button.click();
    });

    it('should create button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createButtonWithGlyphIcon('button-id', GlyphIconFactory.ARROW_LEFT(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button"><span class="glyphicon glyphicon-arrow-left"></span></button>');
        button.click();
    });

    it('should create primary button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createPrimaryButtonWithGlyphIcon('button-id', GlyphIconFactory.SEARCH(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-search"></span></button>');
        button.click();
    });

    it('should create success button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createSuccessButtonWithGlyphIcon('button-id', GlyphIconFactory.SAVE_FILE(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button"><span class="glyphicon glyphicon-save-file"></span></button>');
        button.click();
    });

    it('should create info button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createInfoButtonWithGlyphIcon('button-id', GlyphIconFactory.PAPERCLIP(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button"><span class="glyphicon glyphicon-paperclip"></span></button>');
        button.click();
    });

    it('should create warning button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createWarningButtonWithGlyphIcon('button-id', GlyphIconFactory.FLAG(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button"><span class="glyphicon glyphicon-flag"></span></button>');
        button.click();
    });

    it('should create danger button with glyph icon and without text', function (done) {
        var button = ButtonFactory.createDangerButtonWithGlyphIcon('button-id', GlyphIconFactory.REMOVE(), '', function () {
            done();
        });
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button"><span class="glyphicon glyphicon-remove"></span></button>');
        button.click();
    });
});