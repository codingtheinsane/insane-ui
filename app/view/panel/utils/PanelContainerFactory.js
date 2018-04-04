var ElementFactory = require('./element/ElementFactory');

var ALERT_BOTTOM_CONTAINER_CLASS_NAME = 'ui-alert-bottom-container';
var ALERT_TOP_CONTAINER_CLASS_NAME = 'ui-alert-top-container';
var BODY_CONTENT_CONTAINER_CLASS_NAME = 'ui-body-content-container';
var BUTTON_BOTTOM_CONTAINER_CLASS_NAME = 'ui-button-bottom-container';
var BUTTON_TOP_CONTAINER_CLASS_NAME = 'ui-button-top-container';

function createPanelBody(panelId) {
    var panelBody = ElementFactory.createElementWithIdAndClassName('div', panelId + '-body', 'panel-body');
    panelBody.appendChild(ElementFactory.createElementWithIdAndClassName('div', panelId + '-alert-top-container', ALERT_TOP_CONTAINER_CLASS_NAME));
    panelBody.appendChild(ElementFactory.createElementWithIdAndClassName('div', panelId + '-button-top-container', BUTTON_TOP_CONTAINER_CLASS_NAME));
    panelBody.appendChild(ElementFactory.createElementWithIdAndClassName('div', panelId + '-body-content', BODY_CONTENT_CONTAINER_CLASS_NAME));
    panelBody.appendChild(ElementFactory.createElementWithIdAndClassName('div', panelId + '-alert-bottom-container', ALERT_BOTTOM_CONTAINER_CLASS_NAME));
    panelBody.appendChild(ElementFactory.createElementWithIdAndClassName('div', panelId + '-button-bottom-container', BUTTON_BOTTOM_CONTAINER_CLASS_NAME));
    return panelBody;
}

function createPanelHeading(panelId, panelTitle) {
    return ElementFactory.createElementWithIdClassNameAndTextNode('div', panelId + '-heading', 'panel-heading', panelTitle);
}

function createContainer(panelId, panelTitle) {
    var panel = ElementFactory.createElementWithIdAndClassName('div', panelId, 'panel panel-default');
    panel.appendChild(createPanelHeading(panelId, panelTitle));
    panel.appendChild(createPanelBody(panelId));
    return panel;
}

module.exports = {
    createContainer: createContainer
};