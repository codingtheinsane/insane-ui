var _ = require('underscore');
var IndexPageController = require('./page/IndexPageController');
var ActionPanelPageController = require('./page/ActionPanelPageController');

var controllerMapping = [
    {'controller': ActionPanelPageController, 'query': '?/panel/ActionPanel'}
];

function getPageControllerFromCurrentHRef(currentHRef) {
    var controller = IndexPageController;
    _.each(controllerMapping, function (url) {
        if (currentHRef.endsWith(url.query)) {
            controller = url.controller;
        }
    });
    return controller;
}

module.exports = {
    getPageControllerFromCurrentHRef: getPageControllerFromCurrentHRef
};