var MenuConfiguration = require('./MenuConfiguration');
var MenuPanel = require('../../../app/view/panel/MenuPanel');
var JqueryBootstrap = require('../../../app/view/panel/utils/external/JqueryBoostrap');
var SelectPicker = require('../../../app/view/panel/utils/external/SelectPicker');

function run(container) {
    JqueryBootstrap.onDocumentLoadingSetupJqueryBootstrap();
    SelectPicker.onDocumentLoadingSetupSelectPicker();
    container.appendChild(MenuPanel.createMenu('ui-menu', 'Insane UI', MenuConfiguration));
}

module.exports = {
    run: run
};