var expect = require('chai').expect;
var UI = require('../../../../../app/page/view/ui/UI');
var ActionPanel = require('../../../../../app/page/view/ui/panel/ActionPanel');
var PanelContainerUtilities = require('../../../../../app/page/view/ui/panel/utils/PanelContainerUtilities');
var AlertFactory = require('../../../../../app/page/view/ui/panel/utils/element/AlertFactory');
var ButtonFactory = require('../../../../../app/page/view/ui/panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('../../../../../app/page/view/ui/panel/utils/element/GlyphIconFactory');

describe('UI', function () {

    it('should provide access to Action Panel', function () {
        expect(UI.panel.ActionPanel).to.equal(ActionPanel);
    });

    it('should provide access to Panel Container Utilities', function () {
        expect(UI.panel.Utilities).to.equal(PanelContainerUtilities);
    });

    it('should provide access to Alert Factory', function () {
        expect(UI.element.Alert).to.equal(AlertFactory);
    });

    it('should provide access to Button Factory', function () {
        expect(UI.element.Button).to.equal(ButtonFactory);
    });

    it('should provide access to Glyph Icon Factory', function () {
        expect(UI.element.GlyphIcon).to.equal(GlyphIconFactory);
    });
});