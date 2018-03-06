var View = require('../../view/PassiveViewAPI');

function createInitialActionPanel(initialActionPanelConfiguration) {
    var initialActionPanel = View.panel.ActionPanel.createActionPanelContainer(
        'content-action-initial-panel', 'Initial Action Panel', initialActionPanelConfiguration
    );
    var initialButton = View.element.Button.createPrimaryButtonWithGlyphIcon(
        'content-action-initial-button', View.element.GlyphIcon.USER(), 'Submit',
        function() {
            console.log(View.panel.ActionPanel.retrieveActionPanelData(initialActionPanel));
        }
    );
    View.panel.ActionPanel.addButtonToBottomPanel(initialActionPanel, initialButton);
    return initialActionPanel;
}

module.exports = {
    createInitialActionPanel: createInitialActionPanel
};