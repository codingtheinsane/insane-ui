var ActionPanelPageModel = require('./ActionPanelPageModel');
var ActionPanelPagePanelFactory = require('./ActionPanelPagePanelFactory');

function run(container) {
    var initialActionPanelConfiguration = ActionPanelPageModel.getInitialActionPanelConfiguration();
    var initialActionPanel = ActionPanelPagePanelFactory.createInitialActionPanel(initialActionPanelConfiguration);
    container.appendChild(initialActionPanel);
}

module.exports = {
    run: run
};
