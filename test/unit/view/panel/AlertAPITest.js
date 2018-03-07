var expect = require('chai').expect;
var sinon = require('sinon');
var AlertAPI = require('../../../../app/view/panel/AlertAPI');
var AlertFactory = require('../../../../app/view/panel/utils/element/AlertFactory');
var ElementDestructor = require('../../../../app/view/panel/utils/element/ElementDestructor');

describe('Alert API', function () {

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create success alert', function () {
        sandbox.stub(AlertFactory, 'createSuccessAlert').callsFake(function (alertId, alertText, alertTimeoutInSeconds) {
            expect(alertId).to.equal('id');
            expect(alertText).to.equal('alert text');
            expect(alertTimeoutInSeconds).to.equal(5);
            return 'alert';
        });
        expect(AlertAPI.createSuccessAlert('id', 'alert text', 5)).to.equal('alert');
    });

    it('should create info alert', function () {
        sandbox.stub(AlertFactory, 'createInfoAlert').callsFake(function (alertId, alertText, alertTimeoutInSeconds) {
            expect(alertId).to.equal('id');
            expect(alertText).to.equal('alert text');
            expect(alertTimeoutInSeconds).to.equal(5);
            return 'alert';
        });
        expect(AlertAPI.createInfoAlert('id', 'alert text', 5)).to.equal('alert');
    });

    it('should create warning alert', function () {
        sandbox.stub(AlertFactory, 'createWarningAlert').callsFake(function (alertId, alertText, alertTimeoutInSeconds) {
            expect(alertId).to.equal('id');
            expect(alertText).to.equal('alert text');
            expect(alertTimeoutInSeconds).to.equal(5);
            return 'alert';
        });
        expect(AlertAPI.createWarningAlert('id', 'alert text', 5)).to.equal('alert');
    });

    it('should create danger alert', function () {
        sandbox.stub(AlertFactory, 'createDangerAlert').callsFake(function (alertId, alertText, alertTimeoutInSeconds) {
            expect(alertId).to.equal('id');
            expect(alertText).to.equal('alert text');
            expect(alertTimeoutInSeconds).to.equal(5);
            return 'alert';
        });
        expect(AlertAPI.createDangerAlert('id', 'alert text', 5)).to.equal('alert');
    });

    it('should remove alert', function (done) {
        sandbox.stub(ElementDestructor, 'destructElement').callsFake(function (alert) {
            expect(alert).to.equal('alert');
            done();
        });
        AlertAPI.removeAlert('alert');
    });
});