var ElementFactory = require('./element/ElementFactory');

function createLoadingPanel(panelId) {
    var spinner = ElementFactory.createElementWithIdAndClassName('span', panelId + '-spinner', 'glyphicon glyphicon-repeat ui-spinner');
    var loadingPanel = ElementFactory.createElementWithIdAndClassName('div', panelId, 'ui-loading-panel text-center');
    loadingPanel.appendChild(spinner);
    loadingPanel.appendChild(document.createTextNode(' Loading'));
    return loadingPanel;
}

module.exports = {
    createLoadingPanel: createLoadingPanel
};