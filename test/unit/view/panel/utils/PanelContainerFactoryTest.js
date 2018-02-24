var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var PanelContainerFactory = require('../../../../../app/view/panel/utils/PanelContainerFactory');

describe('Panel Container Factory', function () {

    jsdom();

    it('should create a panel', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        expect(panel.outerHTML).to.equal(
            '<div id="panel-id" class="panel panel-default">'
            + '<div id="panel-id-heading" class="panel-heading">Panel Title</div>'
            + '<div id="panel-id-body" class="panel-body">'
            + '<div id="panel-id-alert-top-container" class="ui-alert-top-container"></div>'
            + '<div id="panel-id-button-top-container" class="ui-button-top-container"></div>'
            + '<div id="panel-id-body-content" class="ui-body-content-container"></div>'
            + '<div id="panel-id-alert-bottom-container" class="ui-alert-bottom-container"></div>'
            + '<div id="panel-id-button-bottom-container" class="ui-button-bottom-container"></div>'
            + '</div></div>');
    });
});