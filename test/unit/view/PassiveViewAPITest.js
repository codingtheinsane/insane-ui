var expect = require('chai').expect;
var PassiveViewAPI = require('../../../app/view/PassiveViewAPI');
var ActionPanelAPI = require('../../../app/view/panel/ActionPanelAPI');
var AlertAPI = require('../../../app/view/panel/AlertAPI');
var ButtonAPI = require('../../../app/view/panel/ButtonAPI');
var GlyphIconAPI = require('../../../app/view/panel/GlyphIconAPI');
var MenuPanelAPI = require('../../../app/view/panel/MenuPanelAPI');

describe('Passive View API', function () {

    it('should provide access to Action Panel API', function () {
        expect(PassiveViewAPI.panel.ActionPanel).to.equal(ActionPanelAPI);
    });

    it('should provide access to Menu Panel API', function () {
        expect(PassiveViewAPI.panel.MenuPanel).to.equal(MenuPanelAPI);
    });

    it('should provide access to Alert Factory', function () {
        expect(PassiveViewAPI.element.Alert).to.equal(AlertAPI);
    });

    it('should provide access to Button Factory', function () {
        expect(PassiveViewAPI.element.Button).to.equal(ButtonAPI);
    });

    it('should provide access to Glyph Icon Factory', function () {
        expect(PassiveViewAPI.element.GlyphIcon).to.equal(GlyphIconAPI);
    });
});