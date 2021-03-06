var View = require('../../view/PassiveViewAPI');

function createLogInPanel(loginActionPanelConfiguration) {
    var logInActionPanel = View.panel.ActionPanel.createActionPanelContainer(
        'content-index-login-panel', 'Login Panel', loginActionPanelConfiguration
    );
    var logInButton = View.element.Button.createPrimaryButtonWithGlyphIcon(
        'content-index-login-button', View.element.GlyphIcon.USER(), 'Log In'
    );
    View.panel.ActionPanel.addButtonToBottomPanel(logInActionPanel, logInButton);
    return logInActionPanel;
}

module.exports = {
    createLogInPanel: createLogInPanel
};