var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var IndexPagePanelFactory = require('../../../../app/content/index/IndexPagePanelFactory');
var View = require('../../../../app/view/PassiveViewAPI');

describe('Index Page Panel Factory', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create log in panel with log in action panel configuration and append it to container', function () {
        sandbox.stub(View.panel.ActionPanel, 'addButtonToBottomPanel').callsFake(function(container, button) {
            expect(container).to.equal('Stubbed Log In Panel');
            expect(button).to.equal('Stubbed Log In Button');
        });

        sandbox.stub(View.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(View.panel.ActionPanel, 'createActionPanelContainer').callsFake(function (id, title, config) {
            expect(id).to.equal('content-index-login-panel');
            expect(title).to.equal('Login Panel');
            expect(config).to.equal('Stubbed Log In Action Panel Configuration');
            return 'Stubbed Log In Panel';
        });

        sandbox.stub(View.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('content-index-login-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Log In');
            return 'Stubbed Log In Button';
        });

        expect(IndexPagePanelFactory.createLogInPanel('Stubbed Log In Action Panel Configuration')).to.equal('Stubbed Log In Panel');
    });
});
