var $ = require('jquery');
var MenuConfiguration = require('./content/menu/MenuConfiguration');
var Router = require('./Router');

var Document = require('./view/Document');

function createPageContentOnDocumentReady() {
    Router.getPageControllerFromCurrentHRef(window.location.href)
        .run(document.getElementById('ui-content-container'), window.location.hash);
}

Document.setupExternalDependencies();
Document.createMenuOnDocumentLoading(MenuConfiguration);

$(document).ready(function () {
    createPageContentOnDocumentReady();
});