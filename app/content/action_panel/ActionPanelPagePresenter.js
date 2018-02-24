var ActionPanelPageInitialActionPanel = require('./ActionPanelPageInitialActionPanel');
var ActionPanelPageModel = require('./ActionPanelPageModel');

function run(container) {
    var initialActionPanelConfiguration = ActionPanelPageModel.getInitialActionPanelConfiguration();
    var initialActionPanel = ActionPanelPageInitialActionPanel.createInitialActionPanel(initialActionPanelConfiguration);
    container.appendChild(initialActionPanel);
}

module.exports = {
    run: run
};
