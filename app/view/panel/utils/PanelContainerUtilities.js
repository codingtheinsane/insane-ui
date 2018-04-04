var ALERT_BOTTOM_CONTAINER_SELECTOR = '.ui-alert-bottom-container';
var ALERT_TOP_CONTAINER_SELECTOR = '.ui-alert-top-container';
var BODY_CONTENT_CONTAINER_SELECTOR = '.ui-body-content-container';
var BUTTON_BOTTOM_CONTAINER_SELECTOR = '.ui-button-bottom-container';
var BUTTON_TOP_CONTAINER_SELECTOR = '.ui-button-top-container';

function addAlertToBottomPanel(container, alert) {
    container.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).appendChild(alert);
}

function addAlertToTopPanel(container, alert) {
    container.querySelector(ALERT_TOP_CONTAINER_SELECTOR).appendChild(alert);
}

function addButtonToBottomPanel(container, button) {
    container.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).appendChild(button);
}

function addButtonToTopPanel(container, button) {
    container.querySelector(BUTTON_TOP_CONTAINER_SELECTOR).appendChild(button);
}

function addContentToContainer(container, content) {
    container.querySelector(BODY_CONTENT_CONTAINER_SELECTOR).appendChild(content);
}

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearAlertsFromBottomPanel(container) {
    clearContainer(container.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR));
}

function clearAlertsFromTopPanel(container) {
    clearContainer(container.querySelector(ALERT_TOP_CONTAINER_SELECTOR));
}

function clearButtonsFromBottomPanel(container) {
    clearContainer(container.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR));
}

function clearButtonsFromTopPanel(container) {
    clearContainer(container.querySelector(BUTTON_TOP_CONTAINER_SELECTOR));
}

function clearContentFromContainer(container) {
    clearContainer(container.querySelector(BODY_CONTENT_CONTAINER_SELECTOR));
}

function removeAlertFromBottomPanel(container, alert) {
    container.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).removeChild(alert);
}

function removeAlertFromTopPanel(container, alert) {
    container.querySelector(ALERT_TOP_CONTAINER_SELECTOR).removeChild(alert);
}

function removeButtonFromBottomPanel(container, button) {
    container.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).removeChild(button);
}

function removeButtonFromTopPanel(container, button) {
    container.querySelector(BUTTON_TOP_CONTAINER_SELECTOR).removeChild(button);
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
    removeButtonFromTopPanel: removeButtonFromTopPanel
};