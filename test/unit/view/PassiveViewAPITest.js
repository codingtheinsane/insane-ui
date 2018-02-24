var expect = require('chai').expect;
var PassiveViewAPI = require('../../../app/view/PassiveViewAPI');
var ActionPanel = require('../../../app/view/panel/ActionPanel');
var PanelContainerUtilities = require('../../../app/view/panel/utils/PanelContainerUtilities');
var AlertFactory = require('../../../app/view/panel/utils/element/AlertFactory');
var ButtonFactory = require('../../../app/view/panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('../../../app/view/panel/utils/element/GlyphIconFactory');

describe('Passive View API', function () {

    it('should provide access to Action Panel', function () {
        expect(PassiveViewAPI.panel.ActionPanel).to.equal(ActionPanel);
    });

    it('should provide access to Panel Container Utilities', function () {
        expect(PassiveViewAPI.panel.Utilities).to.equal(PanelContainerUtilities);
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