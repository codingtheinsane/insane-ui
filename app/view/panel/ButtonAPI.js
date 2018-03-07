var ButtonFactory = require('./utils/element/ButtonFactory');
var ElementDestructor = require('./utils/element/ElementDestructor');

function createButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createPrimaryButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createPrimaryButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createSuccessButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createSuccessButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createInfoButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createInfoButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createWarningButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createWarningButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createDangerButton(buttonId, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createDangerButton(buttonId, buttonText, buttonOnClickCallBack);
}

function createButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function createPrimaryButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createPrimaryButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function createSuccessButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createSuccessButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function createInfoButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createInfoButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function createWarningButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createWarningButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function createDangerButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack) {
    return ButtonFactory.createDangerButtonWithGlyphIcon(buttonId, glyphIcon, buttonText, buttonOnClickCallBack);
}

function removeButton(button) {
    ElementDestructor.destructElement(button);
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
    createDangerButtonWithGlyphIcon: createDangerButtonWithGlyphIcon,
    removeButton: removeButton
};