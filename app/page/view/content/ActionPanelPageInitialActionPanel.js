var UI = require('./ui/UI');

function createInitialActionPanel(initialActionPanelConfiguration) {
    var initialActionPanel = UI.panel.ActionPanel.createActionPanel(
        'page-action-initial-panel', 'Initial Action Panel', initialActionPanelConfiguration
    );
    var initialButton = UI.element.Button.createPrimaryButtonWithGlyphIcon(
        'page-action-initial-button', UI.element.GlyphIcon.USER(), 'Submit'
    );
    UI.panel.Utilities.addButtonToBottomContainer(initialActionPanel, initialButton);
    return initialActionPanel;
}

module.exports = {
    createInitialActionPanel: createInitialActionPanel
};