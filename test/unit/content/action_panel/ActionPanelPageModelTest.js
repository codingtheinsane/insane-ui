var expect = require('chai').expect;
var ActionPanelPageModel = require('../../../../app/content/action_panel/ActionPanelPageModel');
var View = require('../../../../app/view/PassiveViewAPI');

describe('Action Panel Page Model', function () {

    it('should provide valid initial action panel configuration', function () {
        var configuration = ActionPanelPageModel.getInitialActionPanelConfiguration();
        expect(View.panel.ActionPanel.validateActionPanelConfiguration(configuration)).to.be.true;
    });
});