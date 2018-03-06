var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanel = require('../../../../app/view/panel/ActionPanelAPI');
var ActionPanelConfigurationValidator = require('../../../../app/view/panel/utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('../../../../app/view/panel/utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('../../../../app/view/panel/utils/ActionPanelFactory');
var ElementDestructor = require('../../../../app/view/panel/utils/element/ElementDestructor');
var PanelContainerFactory = require('../../../../app/view/panel/utils/PanelContainerFactory');
var PanelContainerUtilities = require('../../../../app/view/panel/utils/PanelContainerUtilities');

describe('Action Panel API', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should add alert to bottom panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addAlertToBottomPanel').callsFake(function (container, alert) {
            expect(container).to.equal('Action Panel Container');
            expect(alert).to.equal('Alert');
            done();
        });
        ActionPanel.addAlertToBottomPanel('Action Panel Container', 'Alert');
    });

    it('should add alert to top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addAlertToTopPanel').callsFake(function (container, alert) {
            expect(container).to.equal('Action Panel Container');
            expect(alert).to.equal('Alert');
            done();
        });
        ActionPanel.addAlertToTopPanel('Action Panel Container', 'Alert');
    });

    it('should add button to bottom panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addButtonToBottomPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanel.addButtonToBottomPanel('Action Panel Container', 'Button');
    });

    it('should add button to top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addButtonToTopPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanel.addButtonToTopPanel('Action Panel Container', 'Button');
    });

    it('should clear bottom panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
        });
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.clearAlertsFromContainer('Action Panel Container');
    });

    it('should clear bottom panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.clearAlertsFromBottomPanel('Action Panel Container');
    });

    it('should clear top panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.clearAlertsFromTopPanel('Action Panel Container');
    });

    it('should clear bottom panel buttons', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearButtonsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.clearButtonsFromBottomPanel('Action Panel Container');
    });

    it('should clear top panel buttons', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearButtonsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.clearButtonsFromTopPanel('Action Panel Container');
    });

    it('should create action panel container', function () {
        sandbox.stub(ActionPanelFactory, 'createActionPanel').callsFake(function (id, configuration) {
            expect(id).to.equal('id');
            expect(configuration).to.equal('configuration');
            return 'Stubbed Action Panel';
        });
        sandbox.stub(PanelContainerFactory, 'createPanel').callsFake(function (id, title) {
            expect(id).to.equal('id');
            expect(title).to.equal('title');
            return 'Stubbed Action Panel Container';
        });
        sandbox.stub(PanelContainerUtilities, 'addContentToContainer').callsFake(function (container, panel) {
            expect(container).to.equal('Stubbed Action Panel Container');
            expect(panel).to.equal('Stubbed Action Panel');
        });
        expect(ActionPanel.createActionPanelContainer('id', 'title', 'configuration')).to.equal('Stubbed Action Panel Container');
    });

    it('should destroy action panel container', function (done) {
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.destroyActionPanelContainer('Action Panel Container');
    });

    it('should recreate action panel', function (done) {
        var stubbedContainer = {
            'id': 'container id'
        };
        sandbox.stub(ActionPanelFactory, 'createActionPanel').callsFake(function (id, configuration) {
            expect(id).to.equal('container id');
            expect(configuration).to.equal('new configuration');
            return 'Stubbed New Action Panel';
        });
        sandbox.stub(PanelContainerUtilities, 'removeContentFromContainer').callsFake(function (container) {
            expect(container).to.equal(stubbedContainer);
        });
        sandbox.stub(PanelContainerUtilities, 'addContentToContainer').callsFake(function (container, panel) {
            expect(container).to.equal(stubbedContainer);
            expect(panel).to.equal('Stubbed New Action Panel');
            done();
        });
        ActionPanel.recreateActionPanel(stubbedContainer, 'new configuration');
    });

    it('should remove action panel from container', function (done) {
        sandbox.stub(PanelContainerUtilities, 'removeContentFromContainer').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanel.removeActionPanel('Action Panel Container');
    });

    it('should remove alert from bottom panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'removeAlertFromBottomPanel').callsFake(function (container, alert) {
            expect(container).to.equal('Action Panel Container');
            expect(alert).to.equal('Alert');
            done();
        });
        ActionPanel.removeAlertFromBottomPanel('Action Panel Container', 'Alert');
    });

    it('should remove alert from top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'removeAlertFromTopPanel').callsFake(function (container, alert) {
            expect(container).to.equal('Action Panel Container');
            expect(alert).to.equal('Alert');
            done();
        });
        ActionPanel.removeAlertFromTopPanel('Action Panel Container', 'Alert');
    });

    it('should remove button from bottom panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'removeButtonFromBottomPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanel.removeButtonFromBottomPanel('Action Panel Container', 'Button');
    });

    it('should remove button from top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'removeButtonFromTopPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanel.removeButtonFromTopPanel('Action Panel Container', 'Button');
    });

    it('should validate panel configuration', function () {
        sandbox.stub(ActionPanelConfigurationValidator, 'validateConfiguration').callsFake(function (panelConfiguration) {
            expect(panelConfiguration).to.equal('Stubbed Panel Configuration');
            return 'Stubbed Verification Result';
        });
        expect(ActionPanel.validateActionPanelConfiguration('Stubbed Panel Configuration')).to.equal('Stubbed Verification Result');
    });

    it('should retrieve data from action panel', function () {
        sandbox.stub(ActionPanelDataRetriever, 'retrieveActionPanelData').callsFake(function (container) {
            expect(container).to.equal('container');
            return 'Stubbed Data';
        });
        expect(ActionPanel.retrieveActionPanelData('container')).to.equal('Stubbed Data');
    });
});