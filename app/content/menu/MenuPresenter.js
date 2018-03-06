var MenuConfiguration = require('./MenuConfiguration');
var PassiveViewAPI = require('../../view/PassiveViewAPI');

function run(container) {
    container.appendChild(PassiveViewAPI.panel.MenuPanel.createMenu('ui-menu', 'Insane UI', MenuConfiguration));
}

module.exports = {
    run: run
};