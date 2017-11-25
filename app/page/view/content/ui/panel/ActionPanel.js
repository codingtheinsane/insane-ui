var ActionPanelConfigurationValidator = require('./utils/ActionPanelConfigurationValidator');
var ActionPanelFactory = require('./utils/ActionPanelFactory');

function createActionPanel(panelId, panelTitle, panelConfiguration) {
    return ActionPanelFactory.createActionPanel(panelId, panelTitle, panelConfiguration);
}

function validateActionPanelConfiguration(panelConfiguration) {
    return ActionPanelConfigurationValidator.validateConfiguration(panelConfiguration);
}

module.exports = {
    createActionPanel: createActionPanel,
    validateActionPanelConfiguration: validateActionPanelConfiguration
};