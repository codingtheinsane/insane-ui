var _ = require('underscore');

function validateStringsInArray(values) {
    var result = true;
    _.each(values, function (value) {
        if (typeof value !== 'string') {
            result = false;
        }
    });
    return result;
}

function validateConfigurationItem(configurationItem) {
    if (!configurationItem) {
        return false;
    }
    if (!configurationItem.id) {
        return false;
    }
    if (typeof configurationItem.id !== 'string') {
        return false;
    }
    if (!configurationItem.label) {
        return false;
    }
    if (typeof configurationItem.label !== 'string') {
        return false;
    }
    if (!configurationItem.type) {
        return false;
    }
    switch (configurationItem.type) {
        case 'boolean':
        case 'date':
        case 'datetime':
        case 'decimal':
        case 'integer':
        case 'text':
        case 'password':
            break;
        case 'single-selection':
        case 'multiple-selection':
            if (!configurationItem.values) {
                return false;
            }
            if (!Array.isArray(configurationItem.values)) {
                return false;
            }
            if (configurationItem.values.length === 0) {
                return false;
            }
            if (validateStringsInArray(configurationItem.values) === false) {
                return false;
            }
            break;
        default:
            return false;
    }
    return true;
}

function removeInvalidConfiguration(configuration) {
    var validatedConfiguration = [];
    _.each(configuration, function (configurationItem) {
        if (validateConfigurationItem(configurationItem)) {
            validatedConfiguration.push(configurationItem);
        }
    });
    return validatedConfiguration;
}

function validateConfiguration(configuration) {
    if (!configuration || !Array.isArray(configuration) || configuration.length === 0) {
        return false;
    }
    var result = true;
    _.each(configuration, function (configurationItem) {
        if (validateConfigurationItem(configurationItem) === false) {
            result = false;
        }
    });
    return result;
}

module.exports = {
    removeInvalidConfiguration: removeInvalidConfiguration,
    validateConfiguration: validateConfiguration
};