function destructElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

module.exports = {
    destructElement: destructElement
};