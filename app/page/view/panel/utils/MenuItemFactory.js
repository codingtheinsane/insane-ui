var ElementFactory = require('./ElementFactory');

function createTextItem(itemId, itemText) {
    var textItem = ElementFactory.createElementWithId('li', itemId);
    textItem.appendChild(ElementFactory.createElementWithIdClassNameAndTextNode('p', itemId + '-text', 'navbar-text', itemText));
    return textItem;
}

function createLinkContent(itemId, itemLink, itemText) {
    var linkContent = ElementFactory.createElementWithIdAndTextNode('a', itemId, itemText);
    linkContent.href = itemLink;
    return linkContent;
}

function createActiveLinkItem(itemId, itemLink, itemText) {
    var activeLinkItem = ElementFactory.createElementWithIdAndClassName('li', itemId, 'active');
    activeLinkItem.appendChild(createLinkContent(itemId + '-link', itemLink, itemText));
    return activeLinkItem;
}

function createLinkItem(itemId, itemLink, itemText) {
    var linkItem = ElementFactory.createElementWithId('li', itemId);
    linkItem.appendChild(createLinkContent(itemId + '-link', itemLink, itemText));
    return linkItem;
}

function createHeaderItem(itemId, itemText) {
    return ElementFactory.createElementWithIdClassNameAndTextNode('li', itemId, 'dropdown-header', itemText);
}

module.exports = {
    createTextItem: createTextItem,
    createActiveLinkItem: createActiveLinkItem,
    createLinkItem: createLinkItem,
    createHeaderItem: createHeaderItem
};