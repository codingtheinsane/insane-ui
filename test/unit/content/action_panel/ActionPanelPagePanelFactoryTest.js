var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPagePanelFactory = require('../../../../app/content/action_panel/ActionPanelPagePanelFactory');
var View = require('../../../../app/view/PassiveViewAPI');

describe('Action Panel Page Panel Factory', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        sandbox.stub(View.panel.ActionPanel, 'addButtonToBottomPanel').callsFake(function(container, button) {
            expect(container).to.equal('Stubbed Initial Panel');
            expect(button).to.equal('Stubbed Initial Button');
        });

        sandbox.stub(View.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(View.panel.ActionPanel, 'createActionPanelContainer').callsFake(function (id, title, config) {
            expect(id).to.equal('content-action-initial-panel');
            expect(title).to.equal('Initial Action Panel');
            expect(config).to.equal('Stubbed Initial Action Panel Configuration');
            return 'Stubbed Initial Panel';
        });
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create initial panel with initial action panel configuration and append it to container', function () {
        sandbox.stub(View.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('content-action-initial-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Submit');
            return 'Stubbed Initial Button';
        });

        expect(ActionPanelPagePanelFactory.createInitialActionPanel('Stubbed Initial Action Panel Configuration')).to.equal('Stubbed Initial Panel');
    });

    it('should bind callback to submit button when creating panel', function (done) {
        var buttonCallback = function () {
        };

        sandbox.stub(View.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText, callback) {
            expect(id).to.equal('content-action-initial-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Submit');
            buttonCallback = callback();
            return 'Stubbed Initial Button';
        });

        sandbox.stub(View.panel.ActionPanel, 'retrieveActionPanelData').callsFake(function (container) {
            expect(container).to.equal('Stubbed Initial Panel');
            done();
        });

        expect(ActionPanelPagePanelFactory.createInitialActionPanel('Stubbed Initial Action Panel Configuration')).to.equal('Stubbed Initial Panel');
        buttonCallback();
    });
});
