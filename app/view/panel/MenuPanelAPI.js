var MenuPanelFactory = require('./utils/MenuPanelFactory');

function createMenu(menuId, menuTitle, menuContent) {
    return MenuPanelFactory.createMenu(menuId, menuTitle, menuContent);
}

module.exports = {
    createMenu: createMenu
};