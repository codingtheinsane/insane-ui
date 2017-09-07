var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelPageController = require('../../../app/page/ActionPanelPageController');
var IndexPageView = require('../../../app/page/view/IndexPageView');
var IndexPageModel = require('../../../app/page/model/IndexPageModel');

describe('Action Panel Page Controller', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should display Index Page View with container and Index Page Model', function (done) {
        sandbox.stub(IndexPageView, 'display').callsFake(function (container, model) {
            expect(container).to.equal('Stubbed container');
            expect(model).to.equal(IndexPageModel);
            done();
        });

        ActionPanelPageController.run('Stubbed container');
    });
});