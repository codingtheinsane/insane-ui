var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPageView = require('../../../../app/page/view/ActionPanelPageView');
var ActionPanelPageInitialActionPanel = require('../../../../app/page/view/content/ActionPanelPageInitialActionPanel');

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

        var stubbedModel = {
            getInitialActionPanelConfiguration: function () {
                return 'Stubbed Initial Action Panel Configuration';
            }
        };

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Initial Panel');
                done();
            }
        };

        ActionPanelPageView.display(stubbedContainer, stubbedModel);
    });
});
