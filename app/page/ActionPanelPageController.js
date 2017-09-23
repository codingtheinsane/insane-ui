var ActionPanelPageView = require('./view/ActionPanelPageView');
var ActionPanelPageModel = require('./model/ActionPanelPageModel');

function run(container) {
    ActionPanelPageView.display(container, ActionPanelPageModel);
}

module.exports = {
    run: run
};