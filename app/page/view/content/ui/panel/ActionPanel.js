var ActionPanelConfigurationValidator = require('./utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('./utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('./utils/ActionPanelFactory');

function createActionPanel(panelId, panelTitle, panelConfiguration) {
    return ActionPanelFactory.createActionPanel(panelId, panelTitle, panelConfiguration);
}

function validateActionPanelConfiguration(panelConfiguration) {
    return ActionPanelConfigurationValidator.validateConfiguration(panelConfiguration);
}

function retrieveActionPanelData(container) {
    return ActionPanelDataRetriever.retrieveActionPanelData(container);
}

module.exports = {
    createActionPanel: createActionPanel,
    validateActionPanelConfiguration: validateActionPanelConfiguration,
    retrieveActionPanelData: retrieveActionPanelData
};