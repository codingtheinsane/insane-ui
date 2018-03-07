var AlertFactory = require('./utils/element/AlertFactory');
var ElementDestructor = require('./utils/element/ElementDestructor');

function createSuccessAlert(alertId, alertText, alertTimeoutInSeconds) {
    return AlertFactory.createSuccessAlert(alertId, alertText, alertTimeoutInSeconds);
}

function createInfoAlert(alertId, alertText, alertTimeoutInSeconds) {
    return AlertFactory.createInfoAlert(alertId, alertText, alertTimeoutInSeconds);
}

function createWarningAlert(alertId, alertText, alertTimeoutInSeconds) {
    return AlertFactory.createWarningAlert(alertId, alertText, alertTimeoutInSeconds);
}

function createDangerAlert(alertId, alertText, alertTimeoutInSeconds) {
    return AlertFactory.createDangerAlert(alertId, alertText, alertTimeoutInSeconds);
}

function removeAlert(alert) {
    return ElementDestructor.destructElement(alert);
}

module.exports = {
    createSuccessAlert: createSuccessAlert,
    createInfoAlert: createInfoAlert,
    createWarningAlert: createWarningAlert,
    createDangerAlert: createDangerAlert,
    removeAlert: removeAlert
};