var ActionPanelConfigurationValidator = require('./utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('./utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('./utils/ActionPanelFactory');
var ElementDestructor = require('./utils/element/ElementDestructor');
var PanelContainerFactory = require('./utils/PanelContainerFactory');
var PanelContainerUtilities = require('./utils/PanelContainerUtilities');

function addAlertToBottomPanel(container, alert) {
    PanelContainerUtilities.addAlertToBottomContainer(container, alert);
}

function addAlertToTopPanel(container, alert) {
    PanelContainerUtilities.addAlertToTopContainer(container, alert);
}

function addButtonToBottomPanel(container, button) {
    PanelContainerUtilities.addButtonToBottomContainer(container, button);
}

function addButtonToTopPanel(container, button) {
    PanelContainerUtilities.addButtonToTopContainer(container, button);
}

function clearAlerts(container) {
    clearAlertTopPanel(container);
    clearAlertFromBottomPanel(container);
}

function clearAlertFromBottomPanel(container) {
    PanelContainerUtilities.clearAlertBottomContainer(container);
}

function clearAlertTopPanel(container) {
    PanelContainerUtilities.clearAlertTopContainer(container);
}

function clearButtonBottomPanel(container) {
    PanelContainerUtilities.clearButtonBottomContainer(container);
}

function clearButtonTopPanel(container) {
    PanelContainerUtilities.clearButtonTopContainer(container);
}

function createActionPanelContainer(panelId, panelTitle, panelConfiguration) {
    var actionPanel = ActionPanelFactory.createActionPanel(panelId, panelConfiguration);
    var actionPanelContainer = PanelContainerFactory.createPanel(panelId, panelTitle);
    PanelContainerUtilities.addContentToContainer(actionPanelContainer, actionPanel);
    return actionPanelContainer;
}

function destroyActionPanelContainer(container) {
    ElementDestructor.destructElement(container);
}

function recreateActionPanel(container, newPanelConfiguration) {
    var actionPanel = ActionPanelFactory.createActionPanel(container.id, newPanelConfiguration);
    PanelContainerUtilities.removeContentFromContainer(container);
    PanelContainerUtilities.addContentToContainer(container, actionPanel);
}

function removeActionPanel(container) {
    PanelContainerUtilities.removeContentFromContainer(container);
}

function removeAlertFromBottomPanel(container, alert) {
    PanelContainerUtilities.removeAlertFromBottomContainer(container, alert);
}

function removeAlertFromTopPanel(container, alert) {
    PanelContainerUtilities.removeAlertFromTopContainer(container, alert);
}

function removeButtonFromBottomPanel(container, button) {
    PanelContainerUtilities.removeButtonFromBottomContainer(container, button);
}

function removeButtonFromTopPanel(container, button) {
    PanelContainerUtilities.removeButtonFromTopContainer(container, button);
}

function validateActionPanelConfiguration(panelConfiguration) {
    return ActionPanelConfigurationValidator.validateConfiguration(panelConfiguration);
}

function retrieveActionPanelData(container) {
    return ActionPanelDataRetriever.retrieveActionPanelData(container);
}

module.exports = {
    addAlertToBottomPanel: addAlertToBottomPanel,
    addAlertToTopPanel: addAlertToTopPanel,
    addButtonToBottomPanel: addButtonToBottomPanel,
    addButtonToTopPanel: addButtonToTopPanel,
    clearAlerts: clearAlerts,
    clearAlertFromBottomPanel: clearAlertFromBottomPanel,
    clearAlertTopPanel: clearAlertTopPanel,
    clearButtonBottomPanel: clearButtonBottomPanel,
    clearButtonTopPanel: clearButtonTopPanel,
    createActionPanelContainer: createActionPanelContainer,
    destroyActionPanelContainer: destroyActionPanelContainer,
    recreateActionPanel: recreateActionPanel,
    removeActionPanel: removeActionPanel,
    removeAlertFromBottomPanel: removeAlertFromBottomPanel,
    removeAlertFromTopPanel: removeAlertFromTopPanel,
    removeButtonFromBottomPanel: removeButtonFromBottomPanel,
    removeButtonFromTopPanel: removeButtonFromTopPanel,
    retrieveActionPanelData: retrieveActionPanelData,
    validateActionPanelConfiguration: validateActionPanelConfiguration
};