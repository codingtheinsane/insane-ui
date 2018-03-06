var IndexPagePanelFactory = require('./IndexPagePanelFactory');
var IndexPageModel = require('./IndexPageModel');

function run(container) {
    var logInActionPanelConfiguration = IndexPageModel.getLogInActionPanelConfiguration();
    var logInPanel = IndexPagePanelFactory.createLogInPanel(logInActionPanelConfiguration);
    container.appendChild(logInPanel);
}

module.exports = {
    run: run
};