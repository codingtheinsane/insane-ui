var _ = require('underscore');
var IndexPagePresenter = require('./content/index/IndexPagePresenter');
var ActionPanelPagePresenter = require('./content/action_panel/ActionPanelPagePresenter');

var controllerMapping = [
    {'controller': ActionPanelPagePresenter, 'query': '?/panel/ActionPanel/'}
];

function getPageControllerFromCurrentHRef(currentHRef) {
    var controller = IndexPagePresenter;
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