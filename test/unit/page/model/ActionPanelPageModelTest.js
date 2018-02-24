var expect = require('chai').expect;
var ActionPanelPageModel = require('../../../../app/page/model/ActionPanelPageModel');
var UI = require('../../../../app/view/PassiveViewAPI');

describe('Action Panel Page Model', function () {

    it('should provide valid initial action panel configuration', function () {
        var configuration = ActionPanelPageModel.getInitialActionPanelConfiguration();
        expect(UI.panel.ActionPanel.validateActionPanelConfiguration(configuration)).to.be.true;
    });
});