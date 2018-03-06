var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var IndexPageModel = require('../../../../app/content/index/IndexPageModel');
var IndexPagePanelFactory = require('../../../../app/content/index/IndexPagePanelFactory');
var IndexPagePresenter = require('../../../../app/content/index/IndexPagePresenter');

describe('Index Page View', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create log in panel with log in action panel configuration and append it to container', function (done) {
        sandbox.stub(IndexPagePanelFactory, 'createLogInPanel').callsFake(function (logInPanelConfiguration) {
            expect(logInPanelConfiguration).to.equal('Stubbed Log In Action Panel Configuration');
            return 'Stubbed Log In Panel';
        });

        sandbox.stub(IndexPageModel, 'getLogInActionPanelConfiguration').callsFake(function () {
            return 'Stubbed Log In Action Panel Configuration';
        });

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Log In Panel');
                done();
            }
        };

        IndexPagePresenter.run(stubbedContainer);
    });
});
