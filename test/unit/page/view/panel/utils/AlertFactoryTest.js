var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var AlertFactory = require('../../../../../../app/page/view/panel/utils/AlertFactory');

describe('Alert Factory', function () {

    jsdom();

    function createExpectedAlert(alertClassName, glyphIconClassName) {
        return '<div id="alert-id" class="alert ' + alertClassName + ' alert-dismissable">'
            + '<span class="glyphicon ' + glyphIconClassName + '"></span>'
            + '<a id="alert-id-close-button" class="close ui-alert-close-button" href="#" data-dismiss="alert" aria-label="close">×</a> <strong id="alert-id-text">Alert Text</strong>'
            + '</div>';
    }

    it('should create success Alert', function () {
        var EXPECTED_ALERT = createExpectedAlert('alert-success', 'glyphicon-ok-sign');
        var alert = AlertFactory.createSuccessAlert('alert-id', 'Alert Text');
        expect(alert.outerHTML).to.equal(EXPECTED_ALERT);
    });

    it('should create info Alert', function () {
        var EXPECTED_ALERT = createExpectedAlert('alert-info', 'glyphicon-info-sign');
        var alert = AlertFactory.createInfoAlert('alert-id', 'Alert Text');
        expect(alert.outerHTML).to.equal(EXPECTED_ALERT);

    });

    it('should create warning Alert', function () {
        var EXPECTED_ALERT = createExpectedAlert('alert-warning', 'glyphicon-exclamation-sign');
        var alert = AlertFactory.createWarningAlert('alert-id', 'Alert Text');
        expect(alert.outerHTML).to.equal(EXPECTED_ALERT);
    });

    it('should create danger Alert', function () {
        var EXPECTED_ALERT = createExpectedAlert('alert-danger', 'glyphicon-exclamation-sign');
        var alert = AlertFactory.createDangerAlert('alert-id', 'Alert Text');
        expect(alert.outerHTML).to.equal(EXPECTED_ALERT);
    });
});