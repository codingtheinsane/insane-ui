var ElementFactory = require('./utils/element/ElementFactory');
var MenuContentFactory = require('./utils/MenuContentFactory');
var MenuHeaderFactory = require('./utils/MenuHeaderFactory');

function createMenu(menuId, menuTitle, menuContent) {
    var collapsibleMenuContentElementUniqueId = menuId + '-collapsible-content';
    var menuContainer = ElementFactory.createElementWithIdAndClassName('div', menuId + '-container', 'container');
    menuContainer.appendChild(MenuHeaderFactory.createMenuHeader(menuId, collapsibleMenuContentElementUniqueId, menuTitle));
    menuContainer.appendChild(MenuContentFactory.createMenuContent(menuId, collapsibleMenuContentElementUniqueId, menuContent));

    var menu = ElementFactory.createElementWithIdAndClassName('nav', menuId, 'navbar navbar-default navbar-static-top');
    menu.appendChild(menuContainer);
    return menu;
}

module.exports = {
    createMenu: createMenu
};