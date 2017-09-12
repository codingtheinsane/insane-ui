var $ = require('jquery');
var MenuConfiguration = require('./config/MenuConfiguration');
var Router = require('./Router');

var Document = require('./page/view/content/ui/Document');

function createPageContentOnDocumentReady() {
    Router.getPageControllerFromCurrentHRef(window.location.href)
        .run(document.getElementById('ui-content-container'), window.location.hash);
}

Document.setupExternalDependencies();
Document.createMenuOnDocumentLoading(MenuConfiguration);

$(document).ready(function () {
    createPageContentOnDocumentReady();
});