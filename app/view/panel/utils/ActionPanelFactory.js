var _ = require('underscore');
var ActionFormGroupInputFactory = require('./ActionFormGroupInputFactory');
var ActionPanelConfigurationValidator = require('./ActionPanelConfigurationValidator');
var ElementFactory = require('./element/ElementFactory');
var PanelContainerFactory = require('./PanelContainerFactory');
var PanelContainerUtilities = require('./PanelContainerUtilities');

function createActionPanel(panelId, panelTitle, panelConfiguration) {
    var form = ElementFactory.createElementWithIdAndClassName('form', panelId +  '-form', 'form-horizontal');
    var panel = PanelContainerFactory.createPanel(panelId, panelTitle);
    PanelContainerUtilities.addContentToContainer(panel, form);
    var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration(panelConfiguration);
    _.each(validatedConfiguration, function (configurationItem) {
        switch (configurationItem.type) {
            case 'boolean':
                form.appendChild(ActionFormGroupInputFactory.createBooleanFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'date':
                form.appendChild(ActionFormGroupInputFactory.createDateFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'datetime':
                form.appendChild(ActionFormGroupInputFactory.createDatetimeFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'decimal':
                form.appendChild(ActionFormGroupInputFactory.createDecimalFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'integer':
                form.appendChild(ActionFormGroupInputFactory.createIntegerFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'text':
                form.appendChild(ActionFormGroupInputFactory.createTextFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'password':
                form.appendChild(ActionFormGroupInputFactory.createPasswordFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label));
                break;
            case 'single-selection':
                form.appendChild(ActionFormGroupInputFactory.createSingleSelectionFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label, configurationItem.values));
                break;
            case 'multiple-selection':
                form.appendChild(ActionFormGroupInputFactory.createMultipleSelectionFormGroup(panelId + '-' +  configurationItem.id, configurationItem.label, configurationItem.values));
                break;
        }
    });
    return panel;
}

module.exports = {
    createActionPanel: createActionPanel
};