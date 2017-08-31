var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var MenuItemFactory = require('../../../../../../app/page/view/panel/utils/MenuItemFactory');

describe('Menu Content Factory', function () {

    jsdom();

    it('should create active link item', function () {
        var menuItem = MenuItemFactory.createActiveLinkItem('item-id', 'https://my.url', 'Active Link Text');
        expect(menuItem.outerHTML).to.equal('<li id="item-id" class="active"><a id="item-id-link" href="https://my.url">Active Link Text</a></li>');
    });

    it('should create link item', function () {
        var menuItem = MenuItemFactory.createLinkItem('item-id', 'https://my.url', 'Link Text');
        expect(menuItem.outerHTML).to.equal('<li id="item-id"><a id="item-id-link" href="https://my.url">Link Text</a></li>');
    });

    it('should create header item', function () {
        var menuItem = MenuItemFactory.createHeaderItem('item-id', 'Header Text');
        expect(menuItem.outerHTML).to.equal('<li id="item-id" class="dropdown-header">Header Text</li>');
    });

    it('should create text item', function () {
        var menuItem = MenuItemFactory.createTextItem('item-id', 'Text');
        expect(menuItem.outerHTML).to.equal('<li id="item-id"><p id="item-id-text" class="navbar-text">Text</p></li>');
    });
});