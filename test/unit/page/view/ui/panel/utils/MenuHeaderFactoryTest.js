var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var MenuHeaderFactory = require('../../../../../../../app/page/view/ui/panel/utils/MenuHeaderFactory');

describe('Menu Header Factory', function () {

    jsdom();

    it('should create header with title and button that allows bootstrap menu window resizing', function () {
        var header = MenuHeaderFactory.createMenuHeader('ui-menu', 'ui-menu-collapsing-menu-anchor', 'Title');
        expect(header.outerHTML).to.equal(
            '<div id="ui-menu-header" class="navbar-header">'
            + '<button id="ui-menu-header-collapsing-button" class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#ui-menu-collapsing-menu-anchor" aria-expanded="false" aria-controls="navbar">'
            + '<span id="ui-menu-header-navigation-toggle" class="sr-only">Toggle navigation</span>'
            + '<span id="ui-menu-header-navigation-toggle-first-icon-bar" class="icon-bar"></span>'
            + '<span id="ui-menu-header-navigation-toggle-second-icon-bar" class="icon-bar"></span>'
            + '<span id="ui-menu-header-navigation-toggle-third-icon-bar" class="icon-bar"></span>'
            + '</button>'
            + '<a id="ui-menu-header-title" class="navbar-brand" href="?/">Title</a>'
            + '</div>'
        );
    });
});