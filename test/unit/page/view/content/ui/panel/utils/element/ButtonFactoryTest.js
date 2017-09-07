var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ButtonFactory = require('../../../../../../../../../app/page/view/content/ui/panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('../../../../../../../../../app/page/view/content/ui/panel/utils/element/GlyphIconFactory');

describe('Button Factory', function () {

    jsdom();

    it('should create button', function () {
        var button = ButtonFactory.createButton('button-id', 'Back');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button">Back</button>');
    });

    it('should create primary button', function () {
        var button = ButtonFactory.createPrimaryButton('button-id', 'Search');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button">Search</button>');
    });

    it('should create success button', function () {
        var button = ButtonFactory.createSuccessButton('button-id', 'Save');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button">Save</button>');
    });

    it('should create info button', function () {
        var button = ButtonFactory.createInfoButton('button-id', 'Bookmark');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button">Bookmark</button>');
    });

    it('should create warning button', function () {
        var button = ButtonFactory.createWarningButton('button-id', 'Flag');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button">Flag</button>');
    });

    it('should create danger button', function () {
        var button = ButtonFactory.createDangerButton('button-id', 'Delete');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button">Delete</button>');
    });

    it('should create button with glyph icon', function () {
        var button = ButtonFactory.createButtonWithGlyphIcon('button-id', GlyphIconFactory.ARROW_LEFT(), 'Back');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button"><span class="glyphicon glyphicon-arrow-left"></span> Back</button>');
    });

    it('should create primary button with glyph icon', function () {
        var button = ButtonFactory.createPrimaryButtonWithGlyphIcon('button-id', GlyphIconFactory.SEARCH(), 'Search');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-search"></span> Search</button>');
    });

    it('should create success button with glyph icon', function () {
        var button = ButtonFactory.createSuccessButtonWithGlyphIcon('button-id', GlyphIconFactory.SAVE_FILE(), 'Save');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button"><span class="glyphicon glyphicon-save-file"></span> Save</button>');
    });

    it('should create info button with glyph icon', function () {
        var button = ButtonFactory.createInfoButtonWithGlyphIcon('button-id', GlyphIconFactory.PAPERCLIP(), 'Bookmark');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button"><span class="glyphicon glyphicon-paperclip"></span> Bookmark</button>');
    });

    it('should create warning button with glyph icon', function () {
        var button = ButtonFactory.createWarningButtonWithGlyphIcon('button-id', GlyphIconFactory.FLAG(), 'Flag');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button"><span class="glyphicon glyphicon-flag"></span> Flag</button>');
    });

    it('should create danger button with glyph icon', function () {
        var button = ButtonFactory.createDangerButtonWithGlyphIcon('button-id', GlyphIconFactory.REMOVE(), 'Delete');
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button"><span class="glyphicon glyphicon-remove"></span> Delete</button>');
    });

    it('should create button with glyph icon and without text', function () {
        var button = ButtonFactory.createButtonWithGlyphIcon('button-id', GlyphIconFactory.ARROW_LEFT());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-default" type="button"><span class="glyphicon glyphicon-arrow-left"></span></button>');
    });

    it('should create primary button with glyph icon and without text', function () {
        var button = ButtonFactory.createPrimaryButtonWithGlyphIcon('button-id', GlyphIconFactory.SEARCH());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-search"></span></button>');
    });

    it('should create success button with glyph icon and without text', function () {
        var button = ButtonFactory.createSuccessButtonWithGlyphIcon('button-id', GlyphIconFactory.SAVE_FILE());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-success" type="button"><span class="glyphicon glyphicon-save-file"></span></button>');
    });

    it('should create info button with glyph icon and without text', function () {
        var button = ButtonFactory.createInfoButtonWithGlyphIcon('button-id', GlyphIconFactory.PAPERCLIP());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-info" type="button"><span class="glyphicon glyphicon-paperclip"></span></button>');
    });

    it('should create warning button with glyph icon and without text', function () {
        var button = ButtonFactory.createWarningButtonWithGlyphIcon('button-id', GlyphIconFactory.FLAG());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-warning" type="button"><span class="glyphicon glyphicon-flag"></span></button>');
    });

    it('should create danger button with glyph icon and without text', function () {
        var button = ButtonFactory.createDangerButtonWithGlyphIcon('button-id', GlyphIconFactory.REMOVE());
        expect(button.outerHTML).to.equal('<button id="button-id" class="btn btn-danger" type="button"><span class="glyphicon glyphicon-remove"></span></button>');
    });
});