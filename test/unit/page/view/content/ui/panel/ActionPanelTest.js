var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanel = require('../../../../../../../app/page/view/content/ui/panel/ActionPanel');
var ActionPanelConfigurationValidator = require('../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelFactory');

describe('Action Panel', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create panel', function () {
        sandbox.stub(ActionPanelFactory, 'createActionPanel').callsFake(function (id, title, configuration) {
            expect(id).to.equal('id');
            expect(title).to.equal('title');
            expect(configuration).to.equal('configuration');

            return 'Stubbed Panel';
        });
        expect(ActionPanel.createActionPanel('id', 'title', 'configuration')).to.equal('Stubbed Panel');
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