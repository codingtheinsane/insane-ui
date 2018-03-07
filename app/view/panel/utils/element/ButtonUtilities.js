function disableButton(button) {
    button.disabled = true;
}

function enableButton(button) {
    button.disabled = false;
}

module.exports = {
    disableButton: disableButton,
    enableButton: enableButton
};