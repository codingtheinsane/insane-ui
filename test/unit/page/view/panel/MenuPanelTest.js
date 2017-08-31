var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var MenuPanel = require('../../../../../app/page/view/panel/MenuPanel');

describe('Menu Panel', function () {

    jsdom();

    it('should create menu', function () {
        var menu = MenuPanel.createMenu('ui-menu', 'Menu Title', {});


        expect(menu.outerHTML).to.equal(
            '<nav id="ui-menu" class="navbar navbar-default navbar-static-top">'
            + '<div id="ui-menu-container" class="container">'
            + '<div id="ui-menu-header" class="navbar-header">'
            + '<button id="ui-menu-header-collapsing-button" class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#ui-menu-collapsible-content" aria-expanded="false" aria-controls="navbar"><span id="ui-menu-header-navigation-toggle" class="sr-only">Toggle navigation</span><span id="ui-menu-header-navigation-toggle-first-icon-bar" class="icon-bar"></span><span id="ui-menu-header-navigation-toggle-second-icon-bar" class="icon-bar"></span><span id="ui-menu-header-navigation-toggle-third-icon-bar" class="icon-bar"></span></button>'
            + '<a id="ui-menu-header-title" class="navbar-brand" href="?/">Menu Title</a></div>'
            + '<div id="ui-menu-collapsible-content" class="navbar-collapse collapse">'
            + '</div></div></nav>');
    });
});