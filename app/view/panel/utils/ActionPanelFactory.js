var _ = require('underscore');
var ActionFormGroupInputFactory = require('./ActionFormGroupInputFactory');
var ActionPanelConfigurationValidator = require('./ActionPanelConfigurationValidator');
var ElementFactory = require('./element/ElementFactory');

function createActionPanel(panelId, panelConfiguration) {
    var actionPanel = ElementFactory.createElementWithIdAndClassName('form', panelId +  '-form', 'form-horizontal');
    var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration(panelConfiguration);
    _.each(validatedConfiguration, function (configurationItem) {
        switch (configurationItem.type) {
            case 'boolean':
                actionPanel.appendChild(ActionFormGroupInputFactory.createBooleanFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'date':
                actionPanel.appendChild(ActionFormGroupInputFactory.createDateFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'datetime':
                actionPanel.appendChild(ActionFormGroupInputFactory.createDatetimeFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'decimal':
                actionPanel.appendChild(ActionFormGroupInputFactory.createDecimalFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'integer':
                actionPanel.appendChild(ActionFormGroupInputFactory.createIntegerFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'text':
                actionPanel.appendChild(ActionFormGroupInputFactory.createTextFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'password':
                actionPanel.appendChild(ActionFormGroupInputFactory.createPasswordFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'single-selection':
                actionPanel.appendChild(ActionFormGroupInputFactory.createSingleSelectionFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label, configurationItem.values));
                break;
            case 'multiple-selection':
                actionPanel.appendChild(ActionFormGroupInputFactory.createMultipleSelectionFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label, configurationItem.values));
                break;
        }
    });
    return actionPanel;
}

module.exports = {
    createActionPanel: createActionPanel
};