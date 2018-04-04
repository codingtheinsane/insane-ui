var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var PanelContainerFactory = require('../../../../../app/view/panel/utils/PanelContainerFactory');

describe('Panel Container Factory', function () {

    jsdom();

    it('should create a container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        expect(container.outerHTML).to.equal(
            '<div id="container-id" class="panel panel-default">'
            + '<div id="container-id-heading" class="panel-heading">Container Title</div>'
            + '<div id="container-id-body" class="panel-body">'
            + '<div id="container-id-alert-top-container" class="ui-alert-top-container"></div>'
            + '<div id="container-id-button-top-container" class="ui-button-top-container"></div>'
            + '<div id="container-id-body-content" class="ui-body-content-container"></div>'
            + '<div id="container-id-alert-bottom-container" class="ui-alert-bottom-container"></div>'
            + '<div id="container-id-button-bottom-container" class="ui-button-bottom-container"></div>'
            + '</div></div>');
    });
});