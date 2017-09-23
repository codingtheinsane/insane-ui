var _ = require('underscore');
var ElementFactory = require('./element/ElementFactory');
var SelectPicker = require('./external/SelectPicker');

function createInput(inputId, inputType, inputTypeId) {
    var input = ElementFactory.createElementWithIdAndClassName(
        'input', inputId, 'form-control ui-form-input ' + inputTypeId
    );
    input.type = inputType;
    return input;
}

function createInputSelection(inputId, inputTypeId, selectionValues) {
    selectionValues.unshift('');
    var selection = ElementFactory.createElementWithIdAndClassName(
        'select', inputId, 'selectpicker form-control ui-form-input ' + inputTypeId
    );
    for (var valueIndex = 0; valueIndex < selectionValues.length; valueIndex++) {
        selection.appendChild(
            ElementFactory.createElementWithIdAndTextNode(
                'option', inputId + '-option-' + valueIndex, selectionValues[valueIndex]
            )
        );
    }
    if (selectionValues.length > 5) {
        selection.setAttribute('data-live-search', 'true');
    }
    SelectPicker.createSelectPickerAfterTimeout(selection);
    return selection;
}

function createBooleanInput(inputId) {
    return createInputSelection(inputId, 'ui-form-input-boolean', ['True', 'False']);
}

function createDateInput(inputId) {
    return createInput(inputId, 'date', 'ui-form-input-date');
}

function createDateTimeInput(inputId) {
    return createInput(inputId, 'datetime-local', 'ui-form-input-date-time');
}

function createDecimalInput(inputId) {
    return createInput(inputId, 'number', 'ui-form-input-decimal');
}

function createIntegerInput(inputId) {
    return createInput(inputId, 'number', 'ui-form-input-integer');
}

function createPasswordInput(inputId) {
    return createInput(inputId, 'password', 'ui-form-input-password');
}

function createTextInput(inputId) {
    return createInput(inputId, 'text', 'ui-form-input-text');
}

function createSingleSelectionInput(inputId, selectionValues) {
    return createInputSelection(inputId, 'ui-form-input-single-selection', selectionValues);
}

function createMultipleSelectionInput(inputId, selectionValues) {
    var inputSelection = createInputSelection(inputId, 'ui-form-input-multiple-selection', selectionValues);
    inputSelection.setAttribute('multiple', 'true');
    return inputSelection;
}

module.exports = {
    createBooleanInput: createBooleanInput,
    createDateInput: createDateInput,
    createDateTimeInput: createDateTimeInput,
    createDecimalInput: createDecimalInput,
    createIntegerInput: createIntegerInput,
    createPasswordInput: createPasswordInput,
    createTextInput: createTextInput,
    createSingleSelectionInput: createSingleSelectionInput,
    createMultipleSelectionInput: createMultipleSelectionInput
};