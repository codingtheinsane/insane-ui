var MenuConfigurationStaticData = require('./MenuConfigurationStaticData');
var PassiveViewAPI = require('../../view/PassiveViewAPI');

function run(container) {
    container.appendChild(PassiveViewAPI.panel.MenuPanel.createMenu('ui-menu', 'Insane UI', MenuConfigurationStaticData));
}

module.exports = {
    run: run
};