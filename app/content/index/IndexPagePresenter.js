var IndexPageLogInPanel = require('./IndexPageLogInPanel');
var IndexPageModel = require('./IndexPageModel');

function run(container) {
    var logInActionPanelConfiguration = IndexPageModel.getLogInActionPanelConfiguration();
    var logInPanel = IndexPageLogInPanel.createLogInPanel(logInActionPanelConfiguration);
    container.appendChild(logInPanel);
}

module.exports = {
    run: run
};