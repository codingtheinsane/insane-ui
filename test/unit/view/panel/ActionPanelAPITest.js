var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var AlertAPI = require('../../../../app/view/panel/AlertAPI');
var ActionPanelAPI = require('../../../../app/view/panel/ActionPanelAPI');
var ActionPanelConfigurationValidator = require('../../../../app/view/panel/utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('../../../../app/view/panel/utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('../../../../app/view/panel/utils/ActionPanelFactory');
var ElementDestructor = require('../../../../app/view/panel/utils/element/ElementDestructor');
var LoadingPanelFactory = require('../../../../app/view/panel/utils/LoadingPanelFactory');
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
        ActionPanelAPI.addAlertToBottomPanel('Action Panel Container', 'Alert');
    });

    it('should add alert to top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addAlertToTopPanel').callsFake(function (container, alert) {
            expect(container).to.equal('Action Panel Container');
            expect(alert).to.equal('Alert');
            done();
        });
        ActionPanelAPI.addAlertToTopPanel('Action Panel Container', 'Alert');
    });

    it('should add button to bottom panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addButtonToBottomPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanelAPI.addButtonToBottomPanel('Action Panel Container', 'Button');
    });

    it('should add button to top panel', function (done) {
        sandbox.stub(PanelContainerUtilities, 'addButtonToTopPanel').callsFake(function (container, button) {
            expect(container).to.equal('Action Panel Container');
            expect(button).to.equal('Button');
            done();
        });
        ActionPanelAPI.addButtonToTopPanel('Action Panel Container', 'Button');
    });

    it('should clear bottom panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
        });
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.clearAlertsFromContainer('Action Panel Container');
    });

    it('should clear bottom panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.clearAlertsFromBottomPanel('Action Panel Container');
    });

    it('should clear top panel alerts', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearAlertsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.clearAlertsFromTopPanel('Action Panel Container');
    });

    it('should clear bottom panel buttons', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearButtonsFromBottomPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.clearButtonsFromBottomPanel('Action Panel Container');
    });

    it('should clear top panel buttons', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearButtonsFromTopPanel').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.clearButtonsFromTopPanel('Action Panel Container');
    });

    it('should create action panel container', function (done) {
        sandbox.stub(LoadingPanelFactory, 'createLoadingPanel').callsFake(function (id) {
            expect(id).to.equal('container-id-loading-panel');
            return 'Stubbed Loading Panel';
        });

        sandbox.stub(PanelContainerFactory, 'createContainer').callsFake(function (id, title) {
            expect(id).to.equal('container-id');
            expect(title).to.equal('title');
            return 'Stubbed Container';
        });

        sandbox.stub(ActionPanelFactory, 'createActionPanel').callsFake(function (id, configuration) {
            expect(id).to.equal('container-id');
            expect(configuration).to.equal('configuration');
            return 'Stubbed Action Panel';
        });

        var addContentToContainer = sandbox.stub(PanelContainerUtilities, 'addContentToContainer');
        addContentToContainer.onCall(0).callsFake(function (container, panel) {
            expect(container).to.equal('Stubbed Container');
            expect(panel).to.equal('Stubbed Loading Panel');
        });
        addContentToContainer.onCall(1).callsFake(function (container, panel) {
            expect(container).to.equal('Stubbed Container');
            expect(panel).to.equal('Stubbed Action Panel');
            done();
        });

        sandbox.stub(PanelContainerUtilities, 'clearContentFromContainer').callsFake(function (container) {
            expect(container).to.equal('Stubbed Container');
        });

        var configurationCallback = function (successCallback, failureCallback) {
            successCallback('configuration');
        };

        expect(ActionPanelAPI.createActionPanelContainer('container-id', 'title', configurationCallback)).to.equal('Stubbed Container');
    });

    it('should show error when fails to create action panel container', function (done) {
        sandbox.stub(LoadingPanelFactory, 'createLoadingPanel').callsFake(function (id) {
            expect(id).to.equal('container-id-loading-panel');
            return 'Stubbed Loading Panel';
        });

        sandbox.stub(PanelContainerFactory, 'createContainer').callsFake(function (id, title) {
            expect(id).to.equal('container-id');
            expect(title).to.equal('title');
            return 'Stubbed Container';
        });

        sandbox.stub(PanelContainerUtilities, 'addContentToContainer').callsFake(function (container, panel) {
            expect(container).to.equal('Stubbed Container');
            expect(panel).to.equal('Stubbed Loading Panel');
        });

        sandbox.stub(AlertAPI, 'createDangerAlert').callsFake(function (id, text, timeoutInSeconds) {
            expect(id).to.equal('container-id-loading-failed-alert');
            expect(text).to.equal('Alert Text');
            expect(timeoutInSeconds).to.equal(60);
            return 'Stubbed Alert';
        });

        sandbox.stub(PanelContainerUtilities, 'addAlertToTopPanel').callsFake(function (container, alertPanel) {
            expect(container).to.equal('Stubbed Container');
            expect(alertPanel).to.equal('Stubbed Alert');
            done();
        });

        var configurationCallback = function (successCallback, failureCallback) {
            failureCallback('Alert Text');
        };

        expect(ActionPanelAPI.createActionPanelContainer('container-id', 'title', configurationCallback)).to.equal('Stubbed Container');
    });

    it('should destroy action panel container', function (done) {
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.destroyActionPanelContainer('Action Panel Container');
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
        sandbox.stub(PanelContainerUtilities, 'clearContentFromContainer').callsFake(function (container) {
            expect(container).to.equal(stubbedContainer);
        });
        sandbox.stub(PanelContainerUtilities, 'addContentToContainer').callsFake(function (container, panel) {
            expect(container).to.equal(stubbedContainer);
            expect(panel).to.equal('Stubbed New Action Panel');
            done();
        });
        ActionPanelAPI.recreateActionPanel(stubbedContainer, 'new configuration');
    });

    it('should remove action panel from container', function (done) {
        sandbox.stub(PanelContainerUtilities, 'clearContentFromContainer').callsFake(function (container) {
            expect(container).to.equal('Action Panel Container');
            done();
        });
        ActionPanelAPI.removeActionPanel('Action Panel Container');
    });

    it('should validate panel configuration', function () {
        sandbox.stub(ActionPanelConfigurationValidator, 'validateConfiguration').callsFake(function (panelConfiguration) {
            expect(panelConfiguration).to.equal('Stubbed Panel Configuration');
            return 'Stubbed Verification Result';
        });
        expect(ActionPanelAPI.validateActionPanelConfiguration('Stubbed Panel Configuration')).to.equal('Stubbed Verification Result');
    });

    it('should retrieve data from action panel', function () {
        sandbox.stub(ActionPanelDataRetriever, 'retrieveActionPanelData').callsFake(function (container) {
            expect(container).to.equal('container');
            return 'Stubbed Data';
        });
        expect(ActionPanelAPI.retrieveActionPanelData('container')).to.equal('Stubbed Data');
    });
});