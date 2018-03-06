var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var MenuConfigurationStaticData = require('../../../../app/content/menu/MenuConfigurationStaticData');
var MenuPresenter = require('../../../../app/content/menu/MenuPresenter');
var PassiveViewAPI = require('../../../../app/view/PassiveViewAPI');

describe('Menu Presenter', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create menu', function (done) {
        sandbox.stub(PassiveViewAPI.panel.MenuPanel, 'createMenu').callsFake(function (id, title, configuration) {
            expect(id).to.equal('ui-menu');
            expect(title).to.equal('Insane UI');
            expect(configuration).to.equal(MenuConfigurationStaticData);
            return 'Stubbed Menu Panel';
        });

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Menu Panel');
                done();
            }
        };

        MenuPresenter.run(stubbedContainer);
    });
});