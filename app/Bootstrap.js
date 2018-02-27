var $ = require('jquery');
var MenuPresenter = require('./content/menu/MenuPresenter');
var Router = require('./Router');

MenuPresenter.run(document.getElementById('ui-menu-container'));

$(document).ready(function () {
    Router.getPageControllerFromCurrentHRef(window.location.href)
        .run(document.getElementById('ui-content-container'), window.location.hash);
});