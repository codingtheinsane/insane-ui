var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var MenuPanelAPI = require('../../../../app/view/panel/MenuPanelAPI');
var MenuPanelFactory = require('../../../../app/view/panel/utils/MenuPanelFactory');
var JqueryBootstrap = require('../../../../app/view/panel/utils/external/JqueryBoostrap');
var SelectPicker = require('../../../../app/view/panel/utils/external/SelectPicker');

describe('Menu Panel API', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should setup jquery bootstrap', function (done) {
        sandbox.stub(JqueryBootstrap, 'onDocumentLoadingSetupJqueryBootstrap').callsFake(function () {
            done();
        });

        MenuPanelAPI.createMenu('menu-id', 'Menu Title', 'Stubbed Menu Content');
    });

    it('should setup select picker', function (done) {
        sandbox.stub(JqueryBootstrap, 'onDocumentLoadingSetupJqueryBootstrap');
        sandbox.stub(SelectPicker, 'onDocumentLoadingSetupSelectPicker').callsFake(function () {
            done();
        });

        MenuPanelAPI.createMenu('menu-id', 'Menu Title', 'Stubbed Menu Content');
    });

    it('should create menu', function () {
        sandbox.stub(JqueryBootstrap, 'onDocumentLoadingSetupJqueryBootstrap');
        sandbox.stub(SelectPicker, 'onDocumentLoadingSetupSelectPicker');
        sandbox.stub(MenuPanelFactory, 'createMenu').callsFake(function (id, title, content) {
            expect(id).to.equal('menu-id');
            expect(title).to.equal('Menu Title');
            expect(content).to.equal('Stubbed Menu Content');
            return 'Menu Container';
        });

        expect(MenuPanelAPI.createMenu('menu-id', 'Menu Title', 'Stubbed Menu Content')).to.equal('Menu Container');
    });
});