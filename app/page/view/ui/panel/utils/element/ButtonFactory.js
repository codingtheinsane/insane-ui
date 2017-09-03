var ElementFactory = require('./ElementFactory');

function createButtonWithClassNameAndText(buttonId, buttonClassName, buttonText) {
    var button = ElementFactory.createElementWithIdClassNameAndTextNode('button', buttonId, buttonClassName, buttonText);
    button.setAttribute('type', 'button');
    return button;
}

function createButtonWithClassNameGlyphIconAndText(buttonId, buttonClassName, glyphIcon, buttonText) {
    var button = ElementFactory.createElementWithIdAndClassName('button', buttonId, buttonClassName);
    button.setAttribute('type', 'button');
    button.appendChild(glyphIcon);
    if (buttonText) {
        button.appendChild(document.createTextNode(' ' + buttonText));
    }
    return button;
}

function createButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-default', buttonText);
}

function createPrimaryButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-primary', buttonText);
}

function createSuccessButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-success', buttonText);
}

function createInfoButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-info', buttonText);
}

function createWarningButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-warning', buttonText);
}

function createDangerButton(buttonId, buttonText) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-danger', buttonText);
}

function createButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-default', glyphIcon, buttonText);
}

function createPrimaryButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-primary', glyphIcon, buttonText);
}

function createSuccessButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-success', glyphIcon, buttonText);
}

function createInfoButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-info', glyphIcon, buttonText);
}

function createWarningButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-warning', glyphIcon, buttonText);
}

function createDangerButtonWithGlyphIcon(buttonId, glyphIcon, buttonText) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-danger', glyphIcon, buttonText);
}

module.exports = {
    createButton: createButton,
    createPrimaryButton: createPrimaryButton,
    createSuccessButton: createSuccessButton,
    createInfoButton: createInfoButton,
    createWarningButton: createWarningButton,
    createDangerButton: createDangerButton,
    createButtonWithGlyphIcon: createButtonWithGlyphIcon,
    createPrimaryButtonWithGlyphIcon: createPrimaryButtonWithGlyphIcon,
    createSuccessButtonWithGlyphIcon: createSuccessButtonWithGlyphIcon,
    createInfoButtonWithGlyphIcon: createInfoButtonWithGlyphIcon,
    createWarningButtonWithGlyphIcon: createWarningButtonWithGlyphIcon,
    createDangerButtonWithGlyphIcon: createDangerButtonWithGlyphIcon
};