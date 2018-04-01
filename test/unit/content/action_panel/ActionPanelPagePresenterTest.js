var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPageModel = require('../../../../app/content/action_panel/ActionPanelPageModel');
var ActionPanelPagePanelFactory = require('../../../../app/content/action_panel/ActionPanelPagePanelFactory');
var ActionPanelPagePresenter = require('../../../../app/content/action_panel/ActionPanelPagePresenter');

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
        sandbox.stub(ActionPanelPagePanelFactory, 'createInitialActionPanel').callsFake(function (initialActionPanelConfigurationCallback) {
            expect(initialActionPanelConfigurationCallback()).to.equal('Stubbed Initial Action Panel Configuration');
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
