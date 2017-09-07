var $ = require('jquery');
var MenuConfiguration = require('./config/MenuConfiguration');
var MenuPanel = require('./page/view/content/ui/panel/MenuPanel');
var Router = require('./Router');

function setupBootstrapOnDocumentLoading() {
    var jQuery = require('jquery');
    window.$ = window.jQuery = jQuery;
    require('bootstrap');
    jQuery.noConflict(true);
}

function createMenuOnDocumentLoading() {
    document.getElementById('ui-menu-container').appendChild(
        MenuPanel.createMenu('ui-menu', 'Insane UI', MenuConfiguration)
    );
}

function createPageContentOnDocumentReady() {
    Router.getPageControllerFromCurrentHRef(window.location.href)
        .run(document.getElementById('ui-content-container'), window.location.hash);
}

setupBootstrapOnDocumentLoading();
createMenuOnDocumentLoading();

$(document).ready(function () {
    createPageContentOnDocumentReady();
});