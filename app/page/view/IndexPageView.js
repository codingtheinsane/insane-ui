var IndexPageLogInPanel = require('./content/IndexPageLogInPanel');

function display(container, model) {
    var logInActionPanelConfiguration = model.getLogInActionPanelConfiguration();
    var logInPanel = IndexPageLogInPanel.createLogInPanel(logInActionPanelConfiguration);
    container.appendChild(logInPanel);
}

module.exports = {
    display: display
};