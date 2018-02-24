var ElementFactory = require('./ElementFactory');
var ElementDestructor = require('./ElementDestructor');
var GlyphIconFactory = require('./GlyphIconFactory');
var TimeKeeper = require('./TimeKeeper');

function createAlertCloseButton(alertId) {
    var closeButton = ElementFactory.createElementWithIdClassNameAndTextNode('a', alertId + '-close-button', 'close ui-alert-close-button', '×');
    closeButton.href = '#';
    closeButton.setAttribute('data-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'close');
    return closeButton;
}

function createAlertWithGlyphIcon(alertId, glyphIcon, alertText, className) {
    var alert = ElementFactory.createElementWithIdAndClassName('div', alertId, className);
    alert.appendChild(glyphIcon);
    alert.appendChild(createAlertCloseButton(alertId));
    alert.appendChild(document.createTextNode(' '));
    alert.appendChild(ElementFactory.createElementWithIdAndTextNode('strong', alertId + '-text', alertText));
    return alert;
}

function createSuccessAlert(alertId, alertText, alertTimeoutInSeconds) {
    var alert = createAlertWithGlyphIcon(alertId, GlyphIconFactory.OK_SIGN(), alertText, 'alert alert-success alert-dismissable');
    TimeKeeper.timeOut(function () {
        ElementDestructor.destructElement(alert);
    }, alertTimeoutInSeconds);
    return alert;
}

function createInfoAlert(alertId, alertText, alertTimeoutInSeconds) {
    var alert = createAlertWithGlyphIcon(alertId, GlyphIconFactory.INFO_SIGN(), alertText, 'alert alert-info alert-dismissable');
    TimeKeeper.timeOut(function () {
        ElementDestructor.destructElement(alert);
    }, alertTimeoutInSeconds);
    return alert;
}

function createWarningAlert(alertId, alertText, alertTimeoutInSeconds) {
    var alert = createAlertWithGlyphIcon(alertId, GlyphIconFactory.EXCLAMATION_SIGN(), alertText, 'alert alert-warning alert-dismissable');
    TimeKeeper.timeOut(function () {
        ElementDestructor.destructElement(alert);
    }, alertTimeoutInSeconds);
    return alert;
}

function createDangerAlert(alertId, alertText, alertTimeoutInSeconds) {
    var alert = createAlertWithGlyphIcon(alertId, GlyphIconFactory.EXCLAMATION_SIGN(), alertText, 'alert alert-danger alert-dismissable');
    TimeKeeper.timeOut(function () {
        ElementDestructor.destructElement(alert);
    }, alertTimeoutInSeconds);
    return alert;
}

module.exports = {
    createSuccessAlert: createSuccessAlert,
    createInfoAlert: createInfoAlert,
    createWarningAlert: createWarningAlert,
    createDangerAlert: createDangerAlert
};