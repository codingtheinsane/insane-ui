var expect = require('chai').expect;
var _ = require('underscore');
var MenuConfigurationStaticData = require('../../../../app/content/menu/MenuConfigurationStaticData');

describe('Menu Configuration', function () {

    it('should have only valid menu types', function () {
        _.each(getAllMenuItems(), function (menuItem) {
            expect(['link', 'active_link', 'menu', 'text']).to.contain(menuItem.type);
        });
    });

    it('should have only valid sub menu types', function () {
        _.each(getAllSubMenuItems(), function (menuItem) {
            expect(['link', 'header']).to.contain(menuItem.type);
        });
    });

    it('should have only valid menu link items', function () {
        _.each(getAllMenuItemsOfType('link'), function (menuItem) {
            expect(['link']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
            expect(menuItem.link).not.to.be.undefined;
            expect(menuItem.link).not.to.be.empty;
            expect(menuItem.link[0]).to.equal('?');
            expect(menuItem.link[1]).to.equal('/');
        });
    });

    it('should have only valid menu active link items', function () {
        _.each(getAllMenuItemsOfType('link'), function (menuItem) {
            expect(['link']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
            expect(menuItem.link).not.to.be.undefined;
            expect(menuItem.link).not.to.be.empty;
            expect(menuItem.link[0]).to.equal('?');
            expect(menuItem.link[1]).to.equal('/');
        });
    });

    it('should have only valid menu menu items', function () {
        _.each(getAllMenuItemsOfType('menu'), function (menuItem) {
            expect(['menu']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
            expect(menuItem.children).not.to.be.undefined;
            expect(menuItem.children.length).to.be.greaterThan(0);
        });
    });

    it('should have only valid menu header items', function () {
        _.each(getAllMenuItemsOfType('header'), function (menuItem) {
            expect(['header']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
        });
    });

    it('should have only valid menu text items', function () {
        _.each(getAllMenuItemsOfType('text'), function (menuItem) {
            expect(['text']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
        });
    });

    it('should have only valid sub menu active link items', function () {
        _.each(getAllSubMenuItemsOfType('link'), function (menuItem) {
            expect(['link']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
            expect(menuItem.link).not.to.be.undefined;
            expect(menuItem.link).not.to.be.empty;
            expect(menuItem.link[0]).to.equal('?');
            expect(menuItem.link[1]).to.equal('/');
        });
    });

    it('should have only valid sub menu header items', function () {
        _.each(getAllSubMenuItemsOfType('header'), function (menuItem) {
            expect(['header']).to.contain(menuItem.type);
            expect(menuItem.run).not.to.be.undefined;
            expect(menuItem.run).not.to.be.empty;
        });
    });

    function getAllSubMenuItemsFromMenu(menu) {
        var subMenuItems = [];
        _.each(menu, function (menuItem) {
            if (menuItem.children) {
                _.each(menuItem.children, function (subMenuItem) {
                    subMenuItems.push(subMenuItem);
                });
            }
        });
        return subMenuItems;
    }

    function getAllSubMenuItems() {
        var menuItems = [];
        menuItems = menuItems.concat(getAllSubMenuItemsFromMenu(MenuConfigurationStaticData.left));
        menuItems = menuItems.concat(getAllSubMenuItemsFromMenu(MenuConfigurationStaticData.right));
        return menuItems;
    }

    function getAllSubMenuItemsOfType(type) {
        var subMenuItemsOfType = [];
        var subMenuItems = getAllSubMenuItems();
        _.each(subMenuItems, function (subMenuItem) {
            if (subMenuItem.type === type) {
                subMenuItemsOfType.push(subMenuItem);
            }
        });
        return subMenuItemsOfType;
    }

    function getAllMenuItemsFromMenu(menu) {
        var menuItems = [];
        _.each(menu, function (menuItem) {
            menuItems.push(menuItem);
        });
        return menuItems;
    }

    function getAllMenuItems() {
        var menuItems = [];
        menuItems = menuItems.concat(getAllMenuItemsFromMenu(MenuConfigurationStaticData.left));
        menuItems = menuItems.concat(getAllMenuItemsFromMenu(MenuConfigurationStaticData.right));
        return menuItems;
    }

    function getAllMenuItemsOfType(type) {
        var menuItemsOfType = [];
        var menuItems = getAllMenuItems();
        _.each(menuItems, function (menuItem) {
            if (menuItem.type === type) {
                menuItemsOfType.push(menuItem);
            }
        });
        return menuItemsOfType;
    }
});