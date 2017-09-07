var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var IndexPageLogInPanel = require('../../../../../app/page/view/content/IndexPageLogInPanel');
var UI = require('../../../../../app/page/view/content/ui/UI');

describe('Index Page View', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create log in panel with log in action panel configuration and append it to container', function () {
        sandbox.stub(UI.panel.Utilities);

        sandbox.stub(UI.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(UI.panel.ActionPanel, 'createActionPanel').callsFake(function (id, title, config) {
            expect(id).to.equal('page-index-login-panel');
            expect(title).to.equal('Login Panel');
            expect(id).to.equal('page-index-login-panel');
            expect(config).to.equal('Stubbed Log In Action Panel Configuration');
            return 'Stubbed Log In Panel';
        });

        sandbox.stub(UI.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('page-index-login-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Log In');
            return 'Stubbed Log In Button';
        });

        expect(IndexPageLogInPanel.createLogInPanel('Stubbed Log In Action Panel Configuration')).to.equal('Stubbed Log In Panel');
    });
});
