var _ = require('underscore');
var $ = require('jquery');

function getIdFromInput(container, input) {
    if (container.id &&
        container.id !== '' &&
        input.id.split(container.id + '-form-').length > 1) {
        return input.id.split(container.id + '-form-')[1];
    }
    if (container.id &&
        container.id !== '' &&
        input.id.split(container.id + '-').length > 1) {
        return input.id.split(container.id + '-')[1];
    }
    return input.id;
}

function getTypeFromInput(input) {
    var type = '';
    var classNames = input.className.split(' ');
    _.each(classNames, function (className) {
        var typeArray = className.split('ui-form-input-type-');
        if (typeArray.length > 1) {
            type = typeArray[1];
        }
    });
    return type;
}

function getValueFromInput(input) {
    if (input &&
        input.value) {
        return input.value;
    }
    return '';
}

function getValueFromDiv(input) {
    if (input &&
        input.querySelector('.filter-option') &&
        input.querySelector('.filter-option').childNodes &&
        input.querySelector('.filter-option').childNodes[0] &&
        input.querySelector('.filter-option').childNodes[0].nodeValue &&
        input.querySelector('.filter-option').childNodes[0].nodeValue.toLowerCase() &&
        input.querySelector('.filter-option').childNodes[0].nodeValue.toLowerCase() !== 'nothing selected') {
        var valueArray = input.querySelector('.filter-option').childNodes[0].nodeValue.split(',');
        var result = [];
        _.each(valueArray, function (valueElement) {
            var value = valueElement.trim();
            if (value !== '') {
                result.push(value);
            }
        });
        return result.join(',');
    }
    return '';
}

function retrieveActionPanelData(container) {
    var data = [];
    _.each(container.querySelectorAll('.ui-form-input'), function (input) {
        switch (input.tagName.toLowerCase()) {
            case 'div':
                data.push({
                    'id': getIdFromInput(container, input),
                    'type': getTypeFromInput(input),
                    'value': getValueFromDiv(input)
                });
                break;
            case 'input':
                data.push({
                    'id': getIdFromInput(container, input),
                    'type': getTypeFromInput(input),
                    'value': getValueFromInput(input)
                });
                break;
        }
    });
    return data;
}

module.exports = {
    retrieveActionPanelData: retrieveActionPanelData
};