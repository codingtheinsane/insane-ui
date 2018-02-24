var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPagePresenter = require('../../../../app/content/action_panel/ActionPanelPagePresenter');
var ActionPanelPageModel = require('../../../../app/content/action_panel/ActionPanelPageModel');
var ActionPanelPageInitialActionPanel = require('../../../../app/content/action_panel/ActionPanelPageInitialActionPanel');

describe('Action Panel Page View', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create initial panel with initial action panel configuration and append it to container', function (done) {
        sandbox.stub(ActionPanelPageInitialActionPanel, 'createInitialActionPanel').callsFake(function (initialActionPanelConfiguration) {
            expect(initialActionPanelConfiguration).to.equal('Stubbed Initial Action Panel Configuration');
            return 'Stubbed Initial Panel';
        });

        sandbox.stub(ActionPanelPageModel, 'getInitialActionPanelConfiguration').callsFake(function() {
            return 'Stubbed Initial Action Panel Configuration';
        });

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Initial Panel');
                done();
            }
        };

        ActionPanelPagePresenter.run(stubbedContainer);
    });
});