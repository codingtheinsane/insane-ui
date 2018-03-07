var expect = require('chai').expect;
var sinon = require('sinon');
var ButtonAPI = require('../../../../app/view/panel/ButtonAPI');
var ButtonFactory = require('../../../../app/view/panel/utils/element/ButtonFactory');
var ElementDestructor = require('../../../../app/view/panel/utils/element/ElementDestructor');

describe('Button API', function () {

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create button', function () {
        sandbox.stub(ButtonFactory, 'createButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create primary button', function () {
        sandbox.stub(ButtonFactory, 'createPrimaryButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createPrimaryButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create success button', function () {
        sandbox.stub(ButtonFactory, 'createSuccessButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createSuccessButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create info button', function () {
        sandbox.stub(ButtonFactory, 'createInfoButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createInfoButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create warning button', function () {
        sandbox.stub(ButtonFactory, 'createWarningButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createWarningButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create danger button', function () {
        sandbox.stub(ButtonFactory, 'createDangerButton').callsFake(function (buttonId, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createDangerButton('id', 'button text', 'callback')).to.equal('button');
    });

    it('should create button With GlyphIcon', function () {
        sandbox.stub(ButtonFactory, 'createButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should create primary button with glyph icon', function () {
        sandbox.stub(ButtonFactory, 'createPrimaryButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createPrimaryButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should create success button with glyph icon', function () {
        sandbox.stub(ButtonFactory, 'createSuccessButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createSuccessButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should create info button with glyph icon', function () {
        sandbox.stub(ButtonFactory, 'createInfoButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createInfoButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should create warning button with glyph icon', function () {
        sandbox.stub(ButtonFactory, 'createWarningButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createWarningButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should create danger button with glyph icon', function () {
        sandbox.stub(ButtonFactory, 'createDangerButtonWithGlyphIcon').callsFake(function (buttonId, glyphIcon, buttonText, buttonOnClickCallback) {
            expect(buttonId).to.equal('id');
            expect(glyphIcon).to.equal('glyphIcon');
            expect(buttonText).to.equal('button text');
            expect(buttonOnClickCallback).to.equal('callback');
            return 'button';
        });
        expect(ButtonAPI.createDangerButtonWithGlyphIcon('id', 'glyphIcon', 'button text', 'callback')).to.equal('button');
    });

    it('should remove button', function (done) {
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (button) {
            expect(button).to.equal('button');
            done();
        });
        ButtonAPI.removeButton('button');
    });
});