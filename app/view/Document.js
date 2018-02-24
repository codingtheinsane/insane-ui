var JqueryBootstrap = require('./panel/utils/external/JqueryBoostrap');
var SelectPicker = require('./panel/utils/external/SelectPicker');
var MenuPanel = require('./panel/MenuPanel');

function setupExternalDependencies() {
    JqueryBootstrap.onDocumentLoadingSetupJqueryBootstrap();
    SelectPicker.onDocumentLoadingSetupSelectPicker();
}

function createMenuOnDocumentLoading(menuConfiguration) {
    document.getElementById('ui-menu-container').appendChild(
        MenuPanel.createMenu('ui-menu', 'Insane UI', menuConfiguration)
    );
}

module.exports = {
    setupExternalDependencies: setupExternalDependencies,
    createMenuOnDocumentLoading: createMenuOnDocumentLoading
};