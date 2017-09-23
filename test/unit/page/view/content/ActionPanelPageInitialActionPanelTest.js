var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPageInitialActionPanel = require('../../../../../app/page/view/content/ActionPanelPageInitialActionPanel');
var UI = require('../../../../../app/page/view/content/ui/UI');

describe('Action Panel Page Initial Action Panel', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create initial panel with initial action panel configuration and append it to container', function () {
        sandbox.stub(UI.panel.Utilities);

        sandbox.stub(UI.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(UI.panel.ActionPanel, 'createActionPanel').callsFake(function (id, title, config) {
            expect(id).to.equal('page-action-initial-panel');
            expect(title).to.equal('Initial Action Panel');
            expect(config).to.equal('Stubbed Initial Action Panel Configuration');
            return 'Stubbed Initial Panel';
        });

        sandbox.stub(UI.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('page-action-initial-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Submit');
            return 'Stubbed Initial Button';
        });

        expect(ActionPanelPageInitialActionPanel.createInitialActionPanel('Stubbed Initial Action Panel Configuration')).to.equal('Stubbed Initial Panel');
    });
});