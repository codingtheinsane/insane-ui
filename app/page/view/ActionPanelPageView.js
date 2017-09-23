var ActionPanelPageInitialActionPanel = require('./content/ActionPanelPageInitialActionPanel');

function display(container, model) {
    var initialActionPanelConfiguration = model.getInitialActionPanelConfiguration();
    var initialActionPanel = ActionPanelPageInitialActionPanel.createInitialActionPanel(initialActionPanelConfiguration);
    container.appendChild(initialActionPanel);
}

module.exports = {
    display: display
};