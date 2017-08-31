function createElementWithId(elementType, elementId) {
    var element = document.createElement(elementType);
    element.id = elementId;
    return element;
}

function createElementWithIdAndClassName(elementType, elementId, elementClassName) {
    var element = createElementWithId(elementType, elementId);
    element.className = elementClassName;
    return element;
}

function createElementWithIdAndTextNode(elementType, elementId, elementTextNode) {
    var element = createElementWithId(elementType, elementId);
    element.appendChild(document.createTextNode(elementTextNode));
    return element;
}

function createElementWithIdClassNameAndTextNode(elementType, elementId, elementClassName, elementTextNode) {
    var element = createElementWithIdAndClassName(elementType, elementId, elementClassName);
    element.appendChild(document.createTextNode(elementTextNode));
    return element;
}

module.exports = {
    createElementWithId: createElementWithId,
    createElementWithIdAndClassName: createElementWithIdAndClassName,
    createElementWithIdAndTextNode: createElementWithIdAndTextNode,
    createElementWithIdClassNameAndTextNode: createElementWithIdClassNameAndTextNode
};
