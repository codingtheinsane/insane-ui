function onDocumentLoadingSetupJqueryBootstrap() {
    var jQuery = require('jquery');
    window.$ = window.jQuery = jQuery;
    require('bootstrap');
    jQuery.noConflict(true);
}

module.exports = {
    onDocumentLoadingSetupJqueryBootstrap: onDocumentLoadingSetupJqueryBootstrap
};