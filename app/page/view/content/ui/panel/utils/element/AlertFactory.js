var ElementFactory = require('./ElementFactory');
var GlyphIconFactory = require('./GlyphIconFactory');

function createCloseButton(alertId) {
    var closeButton = ElementFactory.createElementWithIdClassNameAndTextNode('a', alertId + '-close-button', 'close ui-alert-close-button','×');
    closeButton.href = '#';
    closeButton.setAttribute('data-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'close');
    return closeButton;
}

function createAlertWithGlyphIcon(alertId, glyphIcon, alertText, className) {
    var alert = ElementFactory.createElementWithIdAndClassName('div', alertId, className);
    alert.appendChild(glyphIcon);
    alert.appendChild(createCloseButton(alertId));
    alert.appendChild(document.createTextNode(' '));
    alert.appendChild(ElementFactory.createElementWithIdAndTextNode('strong', alertId + '-text', alertText));
    return alert;
}

function createSuccessAlert(alertId, alertText) {
    return createAlertWithGlyphIcon(alertId, GlyphIconFactory.OK_SIGN(), alertText, 'alert alert-success alert-dismissable');
}

function createInfoAlert(alertId, alertText) {
    return createAlertWithGlyphIcon(alertId, GlyphIconFactory.INFO_SIGN(), alertText, 'alert alert-info alert-dismissable');
}

function createWarningAlert(alertId, alertText) {
    return createAlertWithGlyphIcon(alertId, GlyphIconFactory.EXCLAMATION_SIGN(), alertText, 'alert alert-warning alert-dismissable');
}

function createDangerAlert(alertId, alertText) {
    return createAlertWithGlyphIcon(alertId, GlyphIconFactory.EXCLAMATION_SIGN(), alertText, 'alert alert-danger alert-dismissable');
}

module.exports = {
    createSuccessAlert: createSuccessAlert,
    createInfoAlert: createInfoAlert,
    createWarningAlert: createWarningAlert,
    createDangerAlert: createDangerAlert
};