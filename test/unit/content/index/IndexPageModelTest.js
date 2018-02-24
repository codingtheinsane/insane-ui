var expect = require('chai').expect;
var IndexPageModel = require('../../../../app/content/index/IndexPageModel');
var View = require('../../../../app/view/PassiveViewAPI');

describe('Index Page Model', function () {

    it('should provide valid login action panel configuration', function () {
        var configuration = IndexPageModel.getLogInActionPanelConfiguration();
        expect(View.panel.ActionPanel.validateActionPanelConfiguration(configuration)).to.be.true;
    });
});