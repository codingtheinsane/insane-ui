var ALERT_BOTTOM_CONTAINER_SELECTOR = '.ui-alert-bottom-container';
var ALERT_TOP_CONTAINER_SELECTOR = '.ui-alert-top-container';
var BODY_CONTENT_CONTAINER_SELECTOR = '.ui-body-content-container';
var BUTTON_BOTTOM_CONTAINER_SELECTOR = '.ui-button-bottom-container';
var BUTTON_TOP_CONTAINER_SELECTOR = '.ui-button-top-container';

function addAlertToBottomPanel(panel, alert) {
    panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).appendChild(alert);
}

function addAlertToTopPanel(panel, alert) {
    panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR).appendChild(alert);
}

function addButtonToBottomPanel(panel, button) {
    panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).appendChild(button);
}

function addButtonToTopPanel(panel, button) {
    panel.querySelector(BUTTON_TOP_CONTAINER_SELECTOR).appendChild(button);
}

function addContentToContainer(panel, content) {
    panel.querySelector(BODY_CONTENT_CONTAINER_SELECTOR).appendChild(content);
}

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearAlertsFromBottomPanel(panel) {
    clearContainer(panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR));
}

function clearAlertsFromTopPanel(panel) {
    clearContainer(panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR));
}

function clearButtonsFromBottomPanel(panel) {
    clearContainer(panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR));
}

function clearButtonsFromTopPanel(panel) {
    clearContainer(panel.querySelector(BUTTON_TOP_CONTAINER_SELECTOR));
}

function clearContentFromContainer(panel) {
    clearContainer(panel.querySelector(BODY_CONTENT_CONTAINER_SELECTOR));
}

function removeAlertFromBottomPanel(panel, alert) {
    panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).removeChild(alert);
}

function removeAlertFromTopPanel(panel, alert) {
    panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR).removeChild(alert);
}

function removeButtonFromBottomPanel(panel, button) {
    panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).removeChild(button);
}

function removeButtonFromTopPanel(panel, button) {
    panel.querySelector(BUTTON_TOP_CONTAINER_SELECTOR).removeChild(button);
}

function removeContentFromContainer(panel) {
    var content = panel.querySelector(BODY_CONTENT_CONTAINER_SELECTOR);
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

module.exports = {
    addAlertToBottomPanel: addAlertToBottomPanel,
    addAlertToTopPanel: addAlertToTopPanel,
    addButtonToBottomPanel: addButtonToBottomPanel,
    addButtonToTopPanel: addButtonToTopPanel,
    addContentToContainer: addContentToContainer,
    clearAlertsFromBottomPanel: clearAlertsFromBottomPanel,
    clearAlertsFromTopPanel: clearAlertsFromTopPanel,
    clearButtonsFromBottomPanel: clearButtonsFromBottomPanel,
    clearButtonsFromTopPanel: clearButtonsFromTopPanel,
    clearContentFromContainer: clearContentFromContainer,
    removeAlertFromBottomPanel: removeAlertFromBottomPanel,
    removeAlertFromTopPanel: removeAlertFromTopPanel,
    removeButtonFromBottomPanel: removeButtonFromBottomPanel,
    removeButtonFromTopPanel: removeButtonFromTopPanel,
    removeContentFromContainer: removeContentFromContainer
};