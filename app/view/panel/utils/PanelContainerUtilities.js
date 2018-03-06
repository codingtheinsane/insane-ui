var ALERT_BOTTOM_CONTAINER_SELECTOR = '.ui-alert-bottom-container';
var ALERT_TOP_CONTAINER_SELECTOR = '.ui-alert-top-container';
var BODY_CONTENT_CONTAINER_SELECTOR = '.ui-body-content-container';
var BUTTON_BOTTOM_CONTAINER_SELECTOR = '.ui-button-bottom-container';
var BUTTON_TOP_CONTAINER_SELECTOR = '.ui-button-top-container';

function addAlertToBottomContainer(panel, alert) {
    panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).appendChild(alert);
}

function addAlertToTopContainer(panel, alert) {
    panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR).appendChild(alert);
}

function addButtonToBottomContainer(panel, button) {
    panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).appendChild(button);
}

function addButtonToTopContainer(panel, button) {
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

function clearAlertBottomContainer(panel) {
    clearContainer(panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR));
}

function clearAlertTopContainer(panel) {
    clearContainer(panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR));
}

function clearButtonBottomContainer(panel) {
    clearContainer(panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR));
}

function clearButtonTopContainer(panel) {
    clearContainer(panel.querySelector(BUTTON_TOP_CONTAINER_SELECTOR));
}

function clearContentContainer(panel) {
    clearContainer(panel.querySelector(BODY_CONTENT_CONTAINER_SELECTOR));
}

function removeAlertFromBottomContainer(panel, alert) {
    panel.querySelector(ALERT_BOTTOM_CONTAINER_SELECTOR).removeChild(alert);
}

function removeAlertFromTopContainer(panel, alert) {
    panel.querySelector(ALERT_TOP_CONTAINER_SELECTOR).removeChild(alert);
}

function removeButtonFromBottomContainer(panel, button) {
    panel.querySelector(BUTTON_BOTTOM_CONTAINER_SELECTOR).removeChild(button);
}

function removeButtonFromTopContainer(panel, button) {
    panel.querySelector(BUTTON_TOP_CONTAINER_SELECTOR).removeChild(button);
}

function removeContentFromContainer(panel) {
    var content = panel.querySelector(BODY_CONTENT_CONTAINER_SELECTOR);
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

module.exports = {
    addAlertToBottomContainer: addAlertToBottomContainer,
    addAlertToTopContainer: addAlertToTopContainer,
    addButtonToBottomContainer: addButtonToBottomContainer,
    addButtonToTopContainer: addButtonToTopContainer,
    addContentToContainer: addContentToContainer,
    clearAlertBottomContainer: clearAlertBottomContainer,
    clearAlertTopContainer: clearAlertTopContainer,
    clearButtonBottomContainer: clearButtonBottomContainer,
    clearButtonTopContainer: clearButtonTopContainer,
    clearContentContainer: clearContentContainer,
    removeAlertFromBottomContainer: removeAlertFromBottomContainer,
    removeAlertFromTopContainer: removeAlertFromTopContainer,
    removeButtonFromBottomContainer: removeButtonFromBottomContainer,
    removeButtonFromTopContainer: removeButtonFromTopContainer,
    removeContentFromContainer: removeContentFromContainer
};