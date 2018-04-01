var $ = require('jquery');

function onDocumentLoadingSetupSelectPicker() {
    require('bootstrap-select');
}

function createSelectPickerAfterTimeout(element) {
    //TODO: This is dangerous if the page or container takes more than 100ms to build. Investigation needed
    setTimeout(function () {
        $(element).selectpicker();
    }, 100);
}

module.exports = {
    onDocumentLoadingSetupSelectPicker: onDocumentLoadingSetupSelectPicker,
    createSelectPickerAfterTimeout: createSelectPickerAfterTimeout
};