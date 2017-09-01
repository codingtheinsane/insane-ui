var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var PanelContainerFactory = require('../../../../../../app/page/view/panel/utils/PanelContainerFactory');

describe('Panel Container Factory', function () {

    jsdom();

    it('should create a panel', function () {
        var panel = PanelContainerFactory.createPanel('ui-panel', 'Panel Title');
        expect(panel.outerHTML).to.equal(
            '<div id="ui-panel" class="panel panel-default">'
            + '<div id="ui-panel-heading" class="panel-heading">Panel Title</div>'
            + '<div id="ui-panel-body" class="panel-body">'
            + '<div id="ui-panel-alert-top-container"></div>'
            + '<div id="ui-panel-button-top-container"></div>'
            + '<div id="ui-panel-body-content"></div>'
            + '<div id="ui-panel-alert-bottom-container"></div>'
            + '<div id="ui-panel-button-bottom-container"></div>'
            + '</div></div>');
    });
});