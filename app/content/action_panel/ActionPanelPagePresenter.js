var ActionPanelPageModel = require('./ActionPanelPageModel');
var ActionPanelPagePanelFactory = require('./ActionPanelPagePanelFactory');

function run(container) {
    var initialActionPanel = ActionPanelPagePanelFactory.createInitialActionPanel(ActionPanelPageModel.getInitialActionPanelConfiguration);
    container.appendChild(initialActionPanel);
}

module.exports = {
    run: run
};
