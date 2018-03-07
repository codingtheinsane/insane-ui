var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var LoadingPanelFactory = require('../../../../../app/view/panel/utils/LoadingPanelFactory');

describe('Menu Content Factory', function () {

    jsdom();

    it('should create loading panel', function () {
        var EXPECTED_LOADING_PANEL_OUTER_HTML = '<div id="panel-id" class="ui-loading-panel text-center"><span id="panel-id-spinner" class="glyphicon glyphicon-repeat ui-spinner"></span> Loading</div>';
        expect(LoadingPanelFactory.createLoadingPanel('panel-id').outerHTML).to.equal(EXPECTED_LOADING_PANEL_OUTER_HTML);
    });
});