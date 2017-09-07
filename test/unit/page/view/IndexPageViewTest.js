var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var IndexPageView = require('../../../../app/page/view/IndexPageView');
var IndexPageLogInPanel = require('../../../../app/page/view/content/IndexPageLogInPanel');

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
        sandbox.stub(IndexPageLogInPanel, 'createLogInPanel').callsFake(function (logInPanelConfiguration) {
            expect(logInPanelConfiguration).to.equal('Stubbed Log In Action Panel Configuration');
            return 'Stubbed Log In Panel';
        });

        var stubbedModel = {
            getLogInActionPanelConfiguration: function () {
                return 'Stubbed Log In Action Panel Configuration';
            }
        };

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Log In Panel');
                done();
            }
        };

        IndexPageView.display(stubbedContainer, stubbedModel);
    });
});
