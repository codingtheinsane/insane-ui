var MenuPanelFactory = require('./utils/MenuPanelFactory');
var JqueryBootstrap = require('./utils/external/JqueryBoostrap');
var SelectPicker = require('./utils/external/SelectPicker');

function createMenu(menuId, menuTitle, menuContent) {
    JqueryBootstrap.onDocumentLoadingSetupJqueryBootstrap();
    SelectPicker.onDocumentLoadingSetupSelectPicker();
    return MenuPanelFactory.createMenu(menuId, menuTitle, menuContent);
}

module.exports = {
    createMenu: createMenu
};