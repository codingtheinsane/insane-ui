var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var MenuPanelAPI = require('../../../../app/view/panel/MenuPanelAPI');
var MenuPanelFactory = require('../../../../app/view/panel/utils/MenuPanelFactory');

describe('Menu Panel API', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create menu', function () {
        sandbox.stub(MenuPanelFactory, 'createMenu').callsFake(function (id, title, content) {
            expect(id).to.equal('menu-id');
            expect(title).to.equal('Menu Title');
            expect(content).to.equal('Stubbed Menu Content');
            return 'Menu Container';
        });

        expect(MenuPanelAPI.createMenu('menu-id', 'Menu Title', 'Stubbed Menu Content')).to.equal('Menu Container');
    });
});