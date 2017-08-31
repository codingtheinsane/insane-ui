var ElementFactory = require('./ElementFactory');
var MenuItemFactory = require('./MenuItemFactory');

function createSubMenuItem(subMenuItemId, subMenuItemConfig) {
    switch (subMenuItemConfig.type) {
        case 'header':
            return MenuItemFactory.createHeaderItem(subMenuItemId, subMenuItemConfig.display);
        case 'link':
            return MenuItemFactory.createLinkItem(subMenuItemId, subMenuItemConfig.link, subMenuItemConfig.display);
        default:
            throw 'Sub menu configuration must have a valid type [link|menu|text|header]';
    }
}

function createSubMenuItems(subMenuId, itemConfig) {
    var subMenuItems = ElementFactory.createElementWithIdAndClassName('ul', subMenuId + '-items', 'dropdown-menu');
    for (var subMenuItemIndex = 0; subMenuItemIndex < itemConfig.length; subMenuItemIndex++) {
        var subMenuItemId = subMenuId + '-' + (subMenuItemIndex + 1);
        subMenuItems.appendChild(createSubMenuItem(subMenuItemId, itemConfig[subMenuItemIndex]));
    }
    return subMenuItems;
}

function createSubMenu(menuItemId, menuItemConfig) {
    var subMenuId = menuItemId + '-sub-menu';
    var subMenuDropDownToggleId = subMenuId + '-dropdown-toggle';
    var dropDownToggle = ElementFactory.createElementWithIdClassNameAndTextNode('a', subMenuDropDownToggleId, 'dropdown-toggle', menuItemConfig.display + ' ');
    dropDownToggle.href = '#';
    dropDownToggle.setAttribute('role', 'button');
    dropDownToggle.setAttribute('data-toggle', 'dropdown');
    dropDownToggle.setAttribute('aria-haspopup', 'true');
    dropDownToggle.setAttribute('aria-expanded', 'false');
    dropDownToggle.appendChild(ElementFactory.createElementWithIdAndClassName('span', subMenuDropDownToggleId + '-caret', 'caret'));

    var subMenu = ElementFactory.createElementWithIdAndClassName('li', subMenuId, 'dropdown');
    subMenu.appendChild(dropDownToggle);
    subMenu.appendChild(createSubMenuItems(subMenuId, menuItemConfig.children));
    return subMenu;
}

function createMenuItem(menuItemId, menuItemConfig) {
    switch (menuItemConfig.type) {
        case 'text':
            return MenuItemFactory.createTextItem(menuItemId, menuItemConfig.display);
        case 'active_link':
            return MenuItemFactory.createActiveLinkItem(menuItemId, menuItemConfig.link, menuItemConfig.display);
        case 'link':
            return MenuItemFactory.createLinkItem(menuItemId, menuItemConfig.link, menuItemConfig.display);
        case 'menu':
            return createSubMenu(menuItemId, menuItemConfig);
        default:
            throw 'Menu configuration must have a valid type [text|active_link|link|menu]';
    }
}

function createMenuItems(menuItemsContent, menuItemsId, menuItemsClassName) {
    var menuItems = ElementFactory.createElementWithIdAndClassName('ul', menuItemsId, menuItemsClassName);
    for (var menuItemIndex = 0; menuItemIndex < menuItemsContent.length; menuItemIndex++) {
        var menuItemId = menuItemsId + '-menu-' + (menuItemIndex + 1);
        menuItems.appendChild(createMenuItem(menuItemId, menuItemsContent[menuItemIndex]));
    }
    return menuItems;
}

function createMenuContent(menuId, collapsibleMenuContentElementUniqueId, menuContent) {
    var contentContainer = ElementFactory.createElementWithIdAndClassName('div', collapsibleMenuContentElementUniqueId, 'navbar-collapse collapse');
    if (menuContent.left) {
        contentContainer.appendChild(createMenuItems(menuContent.left, menuId + '-content-left', 'nav navbar-nav'));
    }
    if (menuContent.right) {
        contentContainer.appendChild(createMenuItems(menuContent.right, menuId + '-content-right', 'nav navbar-nav navbar-right'));
    }
    return contentContainer;
}

module.exports = {
    createMenuContent: createMenuContent
};