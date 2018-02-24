var AlertFactory = require('./panel/utils/element/AlertFactory');
var ButtonFactory = require('./panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('./panel/utils/element/GlyphIconFactory');

var ActionPanel = require('./panel/ActionPanel');
var PanelContainerUtilities = require('./panel/utils/PanelContainerUtilities');

module.exports = {
    'panel': {
        'ActionPanel': ActionPanel,
        'Utilities': PanelContainerUtilities
    },
    'element': {
        'Alert': AlertFactory,
        'Button': ButtonFactory,
        'GlyphIcon': GlyphIconFactory
    }
};