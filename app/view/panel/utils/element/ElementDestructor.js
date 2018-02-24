function destructElement(element) {
    element.parentNode.removeChild(element);
}

module.exports = {
    destructElement: destructElement
};