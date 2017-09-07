var ElementFactory = require('./element/ElementFactory');

function createHeaderWithMenuButtonThatAppearsWhenResizingWindowToSmallerWidth(menuId, menuNavBarId) {
    var button = ElementFactory.createElementWithIdAndClassName('button', menuId + '-header-collapsing-button', 'navbar-toggle collapsed');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#' + menuNavBarId);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'navbar');
    button.appendChild(ElementFactory.createElementWithIdClassNameAndTextNode('span', menuId + '-header-navigation-toggle', 'sr-only', 'Toggle navigation'));
    button.appendChild(ElementFactory.createElementWithIdAndClassName('span', menuId + '-header-navigation-toggle-first-icon-bar', 'icon-bar'));
    button.appendChild(ElementFactory.createElementWithIdAndClassName('span', menuId + '-header-navigation-toggle-second-icon-bar', 'icon-bar'));
    button.appendChild(ElementFactory.createElementWithIdAndClassName('span', menuId + '-header-navigation-toggle-third-icon-bar', 'icon-bar'));

    var header = ElementFactory.createElementWithIdAndClassName('div', menuId + '-header', 'navbar-header');
    header.appendChild(button);
    return header;
}

function createMenuHeader(menuId, menuNavBarId, menuTitle) {
    var menuTitleLink = ElementFactory.createElementWithIdClassNameAndTextNode('a', menuId + '-header-title', 'navbar-brand', menuTitle);
    menuTitleLink.href = '?/';

    var menuTitleHeader = createHeaderWithMenuButtonThatAppearsWhenResizingWindowToSmallerWidth(menuId, menuNavBarId);
    menuTitleHeader.appendChild(menuTitleLink);
    return menuTitleHeader;
}

module.exports = {
    createMenuHeader: createMenuHeader
};