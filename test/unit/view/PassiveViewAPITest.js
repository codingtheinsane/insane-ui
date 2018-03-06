var expect = require('chai').expect;
var PassiveViewAPI = require('../../../app/view/PassiveViewAPI');
var ActionPanelAPI = require('../../../app/view/panel/ActionPanelAPI');
var MenuPanelAPI = require('../../../app/view/panel/MenuPanelAPI');
var AlertFactory = require('../../../app/view/panel/utils/element/AlertFactory');
var ButtonFactory = require('../../../app/view/panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('../../../app/view/panel/utils/element/GlyphIconFactory');

describe('Passive View API', function () {

    it('should provide access to Action Panel API', function () {
        expect(PassiveViewAPI.panel.ActionPanel).to.equal(ActionPanelAPI);
    });

    it('should provide access to Menu Panel API', function () {
        expect(PassiveViewAPI.panel.MenuPanel).to.equal(MenuPanelAPI);
    });

    it('should provide access to Alert Factory', function () {
        expect(PassiveViewAPI.element.Alert).to.equal(AlertFactory);
    });

    it('should provide access to Button Factory', function () {
        expect(PassiveViewAPI.element.Button).to.equal(ButtonFactory);
    });

    it('should provide access to Glyph Icon Factory', function () {
        expect(PassiveViewAPI.element.GlyphIcon).to.equal(GlyphIconFactory);
    });
});