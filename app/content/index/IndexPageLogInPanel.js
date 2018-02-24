var UI = require('../../view/PassiveViewAPI');

function createLogInPanel(loginActionPanelConfiguration) {
    var logInActionPanel = UI.panel.ActionPanel.createActionPanel(
        'content-index-login-panel', 'Login Panel', loginActionPanelConfiguration
    );
    var logInButton = UI.element.Button.createPrimaryButtonWithGlyphIcon(
        'content-index-login-button', UI.element.GlyphIcon.USER(), 'Log In'
    );
    UI.panel.Utilities.addButtonToBottomContainer(logInActionPanel, logInButton);
    return logInActionPanel;
}

module.exports = {
    createLogInPanel: createLogInPanel
};