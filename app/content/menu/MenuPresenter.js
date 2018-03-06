var MenuConfiguration = require('./MenuConfiguration');
var PassiveViewAPI = require('../../view/PassiveViewAPI');
var JqueryBootstrap = require('../../../app/view/panel/utils/external/JqueryBoostrap');
var SelectPicker = require('../../../app/view/panel/utils/external/SelectPicker');

function run(container) {
    JqueryBootstrap.onDocumentLoadingSetupJqueryBootstrap();
    SelectPicker.onDocumentLoadingSetupSelectPicker();
    container.appendChild(PassiveViewAPI.panel.MenuPanel.createMenu('ui-menu', 'Insane UI', MenuConfiguration));
}

module.exports = {
    run: run
};