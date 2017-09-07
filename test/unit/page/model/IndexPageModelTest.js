var expect = require('chai').expect;
var IndexPageModel = require('../../../../app/page/model/IndexPageModel');
var UI = require('../../../../app/page/view/content/ui/UI');

describe('Index Page Model', function () {

    it('should provide valid login action panel configuration', function () {
        var configuration = IndexPageModel.getLogInActionPanelConfiguration();
        expect(UI.panel.ActionPanel.validateActionPanelConfiguration(configuration)).to.be.true;
    });
});