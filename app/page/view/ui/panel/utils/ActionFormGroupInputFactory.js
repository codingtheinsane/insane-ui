var ElementFactory = require('./element/ElementFactory');
var InputFactory = require('./InputFactory');

function createFormGroupWithLabel(inputId, inputLabel) {
    var formGroup = ElementFactory.createElementWithIdAndClassName('div', inputId + '-form-group', 'form-group');
    var formGroupLabel = ElementFactory.createElementWithIdClassNameAndTextNode(
        'label', inputId + '-label', 'control-label col-xs-2 col-sm-2 col-md-2 col-lg-2', inputLabel
    );
    formGroupLabel.setAttribute('for', inputId);
    formGroup.appendChild(formGroupLabel);
    return formGroup;
}

function createGroupFormSelection(inputId) {
    return ElementFactory.createElementWithIdAndClassName(
        'div', inputId + '-form-group-selection', 'col-xs-10 col-sm-10 col-md-10 col-lg-10'
    );
}

function createFormGroup(inputId, inputLabel, input) {
    var formGroup = createFormGroupWithLabel(inputId, inputLabel);
    var formGroupSelection = createGroupFormSelection(inputId);
    formGroupSelection.appendChild(input);
    formGroup.appendChild(formGroupSelection);
    return formGroup;
}

function createBooleanInputFormGroup(inputId, inputLabel) {
    var input = InputFactory.createBooleanInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createDateInputFormGroup(inputId, inputLabel) {
    var input = InputFactory.createDateInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createDateTimeFormGroup(inputId, inputLabel) {
    var input = InputFactory.createDateTimeInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createDecimalFormGroup(inputId, inputLabel) {
    var input = InputFactory.createDecimalInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createIntegerFormGroup(inputId, inputLabel) {
    var input = InputFactory.createIntegerInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createTextFormGroup(inputId, inputLabel) {
    var input = InputFactory.createTextInput(inputId);
    return createFormGroup(inputId, inputLabel, input);
}

function createSingleSelectionFormGroup(inputId, inputLabel, selectionValues) {
    var input = InputFactory.createSingleSelectionInput(inputId, selectionValues);
    return createFormGroup(inputId, inputLabel, input);
}

function createMultipleSelectionFormGroup(inputId, inputLabel, selectionValues) {
    var input = InputFactory.createMultipleSelectionInput(inputId, selectionValues);
    return createFormGroup(inputId, inputLabel, input);
}

module.exports = {
    createBooleanInputFormGroup: createBooleanInputFormGroup,
    createDateInputFormGroup: createDateInputFormGroup,
    createDateTimeFormGroup: createDateTimeFormGroup,
    createDecimalFormGroup: createDecimalFormGroup,
    createIntegerFormGroup: createIntegerFormGroup,
    createTextFormGroup: createTextFormGroup,
    createSingleSelectionFormGroup: createSingleSelectionFormGroup,
    createMultipleSelectionFormGroup: createMultipleSelectionFormGroup
};