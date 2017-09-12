var $ = require('jquery');

function onDocumentLoadingSetupSelectPicker() {
    require('bootstrap-select');
}

function createSelectPickerAfterTimeout(element) {
    setTimeout(function () {
        $(element).selectpicker();
    }, 100);
}

module.exports = {
    onDocumentLoadingSetupSelectPicker: onDocumentLoadingSetupSelectPicker,
    createSelectPickerAfterTimeout: createSelectPickerAfterTimeout
};