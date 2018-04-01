var ActionPanelConfigurationValidator = require('./utils/ActionPanelConfigurationValidator');
var ActionPanelDataRetriever = require('./utils/ActionPanelDataRetriever');
var ActionPanelFactory = require('./utils/ActionPanelFactory');
var AlertAPI = require('./AlertAPI');
var ElementDestructor = require('./utils/element/ElementDestructor');
var LoadingPanelFactory = require('./utils/LoadingPanelFactory');
var PanelContainerFactory = require('./utils/PanelContainerFactory');
var PanelContainerUtilities = require('./utils/PanelContainerUtilities');

function addAlertToBottomPanel(container, alert) {
    PanelContainerUtilities.addAlertToBottomPanel(container, alert);
}

function addAlertToTopPanel(container, alert) {
    PanelContainerUtilities.addAlertToTopPanel(container, alert);
}

function addButtonToBottomPanel(container, button) {
    PanelContainerUtilities.addButtonToBottomPanel(container, button);
}

function addButtonToTopPanel(container, button) {
    PanelContainerUtilities.addButtonToTopPanel(container, button);
}

function clearAlertsFromContainer(container) {
    clearAlertsFromTopPanel(container);
    clearAlertsFromBottomPanel(container);
}

function clearAlertsFromBottomPanel(container) {
    PanelContainerUtilities.clearAlertsFromBottomPanel(container);
}

function clearAlertsFromTopPanel(container) {
    PanelContainerUtilities.clearAlertsFromTopPanel(container);
}

function clearButtonsFromBottomPanel(container) {
    PanelContainerUtilities.clearButtonsFromBottomPanel(container);
}

function clearButtonsFromTopPanel(container) {
    PanelContainerUtilities.clearButtonsFromTopPanel(container);
}

function createActionPanelContainer(panelId, panelTitle, panelConfigurationCallback) {
    var loadingPanel = LoadingPanelFactory.createLoadingPanel(panelId + '-loading-panel');
    var container = PanelContainerFactory.createPanel(panelId, panelTitle);
    PanelContainerUtilities.addContentToContainer(container, loadingPanel);
    panelConfigurationCallback(function (panelConfiguration) {
        var actionPanel = ActionPanelFactory.createActionPanel(panelId, panelConfiguration);
        PanelContainerUtilities.removeContentFromContainer(container);
        PanelContainerUtilities.addContentToContainer(container, actionPanel);
    }, function (errorAlertText) {
        var errorAlert = AlertAPI.createDangerAlert(panelId + '-loading-failed-alert', errorAlertText, 60);
        PanelContainerUtilities.addAlertToTopPanel(container, errorAlert);
    });
    return container;
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
    clearAlertsFromContainer: clearAlertsFromContainer,
    clearAlertsFromBottomPanel: clearAlertsFromBottomPanel,
    clearAlertsFromTopPanel: clearAlertsFromTopPanel,
    clearButtonsFromBottomPanel: clearButtonsFromBottomPanel,
    clearButtonsFromTopPanel: clearButtonsFromTopPanel,
    createActionPanelContainer: createActionPanelContainer,
    destroyActionPanelContainer: destroyActionPanelContainer,
    recreateActionPanel: recreateActionPanel,
    removeActionPanel: removeActionPanel,
    retrieveActionPanelData: retrieveActionPanelData,
    validateActionPanelConfiguration: validateActionPanelConfiguration
};