var ElementFactory = require('./ElementFactory');

function createButtonWithClassNameAndText(buttonId, buttonClassName, buttonText, buttonOnClickCallBack) {
    var button = ElementFactory.createElementWithIdClassNameAndTextNode('button', buttonId, buttonClassName, buttonText);
    button.setAttribute('type', 'button');
    button.addEventListener('click', buttonOnClickCallBack);
    return button;
}

function createButtonWithClassNameGlyphIconAndText(buttonId, buttonClassName, glyphIcon, buttonText, buttonOnClickCallBack) {
    var button = ElementFactory.createElementWithIdAndClassName('button', buttonId, buttonClassName);
    button.setAttribute('type', 'button');
    button.appendChild(glyphIcon);
    if (buttonText !== '') {
        button.appendChild(document.createTextNode(' ' + buttonText));
    }
    button.addEventListener('click', buttonOnClickCallBack);
    return button;
}

function createButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-default', buttonText, buttonOnClickCallBack);
}

function createPrimaryButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-primary', buttonText, buttonOnClickCallBack);
}

function createSuccessButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-success', buttonText, buttonOnClickCallBack);
}

function createInfoButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-info', buttonText, buttonOnClickCallBack);
}

function createWarningButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-warning', buttonText, buttonOnClickCallBack);
}

function createDangerButton(buttonId, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameAndText(buttonId, 'btn btn-danger', buttonText, buttonOnClickCallBack);
}

function createButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-default', glyphIcon, buttonText, buttonOnClickCallBack);
}

function createPrimaryButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-primary', glyphIcon, buttonText, buttonOnClickCallBack);
}

function createSuccessButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-success', glyphIcon, buttonText, buttonOnClickCallBack);
}

function createInfoButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-info', glyphIcon, buttonText, buttonOnClickCallBack);
}

function createWarningButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-warning', glyphIcon, buttonText, buttonOnClickCallBack);
}

function createDangerButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return createButtonWithClassNameGlyphIconAndText(buttonId, 'btn btn-danger', glyphIcon, buttonText, buttonOnClickCallBack);
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