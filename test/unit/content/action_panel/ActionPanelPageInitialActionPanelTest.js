var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPageInitialActionPanel = require('../../../../app/content/action_panel/ActionPanelPageInitialActionPanel');
var UI = require('../../../../app/view/PassiveViewAPI');

describe('Action Panel Page Initial Action Panel', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        sandbox.stub(UI.panel.Utilities);

        sandbox.stub(UI.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(UI.panel.ActionPanel, 'createActionPanel').callsFake(function (id, title, config) {
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
        sandbox.stub(UI.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('content-action-initial-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Submit');
            return 'Stubbed Initial Button';
        });

        expect(ActionPanelPageInitialActionPanel.createInitialActionPanel('Stubbed Initial Action Panel Configuration')).to.equal('Stubbed Initial Panel');
    });

    it('should bind callback to submit button when creating panel', function (done) {
        var buttonCallback = function () {
        };

        sandbox.stub(UI.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText, callback) {
            expect(id).to.equal('content-action-initial-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Submit');
            buttonCallback = callback();
            return 'Stubbed Initial Button';
        });

        sandbox.stub(UI.panel.ActionPanel, 'retrieveActionPanelData').callsFake(function (container) {
            expect(container).to.equal('Stubbed Initial Panel');
            done();
        });

        expect(ActionPanelPageInitialActionPanel.createInitialActionPanel('Stubbed Initial Action Panel Configuration')).to.equal('Stubbed Initial Panel');
        buttonCallback();
    });
});
