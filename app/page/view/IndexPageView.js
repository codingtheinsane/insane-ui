var UI = require('./ui/UI');

function createLogInPanel(loginActionPanelConfiguration) {
    var logInActionPanel = UI.panel.ActionPanel.createActionPanel(
        'page-index-login-panel', 'Login Panel', loginActionPanelConfiguration
    );
    var logInButton = UI.element.Button.createPrimaryButtonWithGlyphIcon(
        'page-index-login-button', UI.element.GlyphIcon.USER(), 'Log In'
    );
    UI.panel.Utilities.addButtonToBottomContainer(logInActionPanel, logInButton);
    return logInActionPanel;
}

function display(container, model) {
    var logInActionPanelConfiguration = model.getLogInActionPanelConfiguration();
    var logInPanel = createLogInPanel(logInActionPanelConfiguration);
    container.appendChild(logInPanel);
}

module.exports = {
    createLogInPanel: createLogInPanel,
    display: display
};