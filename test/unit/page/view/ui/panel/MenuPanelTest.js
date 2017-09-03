var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var MenuPanel = require('../../../../../../app/page/view/ui/panel/MenuPanel');
var MenuHeaderFactory = require('../../../../../../app/page/view/ui/panel/utils/MenuHeaderFactory');
var MenuContentFactory = require('../../../../../../app/page/view/ui/panel/utils/MenuContentFactory');

describe('Menu Panel', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        sandbox.stub(MenuHeaderFactory, 'createMenuHeader').callsFake(function () {
            var element = document.createElement('div');
            element.id = 'stubbed-menu-header';
            return element;
        });
        sandbox.stub(MenuContentFactory, 'createMenuContent').callsFake(function () {
            var element = document.createElement('div');
            element.id = 'stubbed-menu-content';
            return element;
        });
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create menu', function () {
        var menu = MenuPanel.createMenu('ui-menu', 'Menu Title', 'Fake Menu Content');

        sinon.assert.calledOnce(MenuHeaderFactory.createMenuHeader);
        sinon.assert.calledWithExactly(MenuHeaderFactory.createMenuHeader, 'ui-menu', 'ui-menu-collapsible-content', 'Menu Title');

        sinon.assert.calledOnce(MenuContentFactory.createMenuContent);
        sinon.assert.calledWithExactly(MenuContentFactory.createMenuContent, 'ui-menu', 'ui-menu-collapsible-content', 'Fake Menu Content');

        expect(menu.outerHTML).to.equal(
            '<nav id="ui-menu" class="navbar navbar-default navbar-static-top">'
            + '<div id="ui-menu-container" class="container">'
            + '<div id="stubbed-menu-header"></div>'
            + '<div id="stubbed-menu-content"></div>'
            + '</div></nav>');
    });
});