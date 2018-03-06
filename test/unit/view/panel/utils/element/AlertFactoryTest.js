var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var AlertFactory = require('../../../../../../app/view/panel/utils/element/AlertFactory');
var ElementDestructor = require('../../../../../../app/view/panel/utils/element/ElementDestructor');
var TimeKeeper = require('../../../../../../app/view/panel/utils/element/TimeKeeper');

describe('Alert Factory', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        sandbox.stub(TimeKeeper, 'timeOut').callsFake(function (callBack, timeInSeconds) {
            expect(timeInSeconds).to.equal(5);
            callBack();
        });
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create success Alert and destruct it on timeout', function (done) {
        var EXPECTED_ALERT = createExpectedAlert('alert-success', 'glyphicon-ok-sign');
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (alertToBeDestructed) {
            expect(alertToBeDestructed.outerHTML).to.equal(EXPECTED_ALERT);
            done();
        });

        AlertFactory.createSuccessAlert('alert-id', 'Alert Text', 5);
    });

    it('should create info Alert and destruct it on timeout', function (done) {
        var EXPECTED_ALERT = createExpectedAlert('alert-info', 'glyphicon-info-sign');
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (alertToBeDestructed) {
            expect(alertToBeDestructed.outerHTML).to.equal(EXPECTED_ALERT);
            done();
        });

        AlertFactory.createInfoAlert('alert-id', 'Alert Text', 5);
    });

    it('should create warning Alert and destruct it on timeout', function (done) {
        var EXPECTED_ALERT = createExpectedAlert('alert-warning', 'glyphicon-exclamation-sign');
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (alertToBeDestructed) {
            expect(alertToBeDestructed.outerHTML).to.equal(EXPECTED_ALERT);
            done();
        });

        AlertFactory.createWarningAlert('alert-id', 'Alert Text', 5);
    });

    it('should create danger Alert and destruct it on timeout', function (done) {
        var EXPECTED_ALERT = createExpectedAlert('alert-danger', 'glyphicon-exclamation-sign');
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (alertToBeDestructed) {
            expect(alertToBeDestructed.outerHTML).to.equal(EXPECTED_ALERT);
            done();
        });

        AlertFactory.createDangerAlert('alert-id', 'Alert Text', 5);
    });

    function createExpectedAlert(alertClassName, glyphIconClassName) {
        return '<div id="alert-id" class="alert ' + alertClassName + ' alert-dismissable">'
            + '<span class="glyphicon ' + glyphIconClassName + '"></span>'
            + '<a id="alert-id-close-button" class="close ui-alert-close-button" href="#" data-dismiss="alert" aria-label="close">×</a> <strong id="alert-id-text">Alert Text</strong>'
            + '</div>';
    }
});