var ElementFactory = require('./ElementFactory');

function createPanelBody(panelId) {
    var panelBody = ElementFactory.createElementWithIdAndClassName('div', panelId + '-body', 'panel-body');
    panelBody.appendChild(ElementFactory.createElementWithId('div', panelId + '-alert-top-container'));
    panelBody.appendChild(ElementFactory.createElementWithId('div', panelId + '-button-top-container'));
    panelBody.appendChild(ElementFactory.createElementWithId('div', panelId + '-body-content'));
    panelBody.appendChild(ElementFactory.createElementWithId('div', panelId + '-alert-bottom-container'));
    panelBody.appendChild(ElementFactory.createElementWithId('div', panelId + '-button-bottom-container'));
    return panelBody;
}

function createPanelHeading(panelId, panelTitle) {
    return ElementFactory.createElementWithIdClassNameAndTextNode('div', panelId + '-heading', 'panel-heading', panelTitle);
}

function createPanel(panelId, panelTitle) {
    var panel = ElementFactory.createElementWithIdAndClassName('div', panelId, 'panel panel-default');
    panel.appendChild(createPanelHeading(panelId, panelTitle));
    panel.appendChild(createPanelBody(panelId));
    return panel;
}

module.exports = {
    createPanel: createPanel
};