var AlertFactory = require('./panel/utils/element/AlertFactory');
var ButtonFactory = require('./panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('./panel/utils/element/GlyphIconFactory');

var ActionPanel = require('./panel/ActionPanel');

module.exports = {
    'panel': {
        'ActionPanel': ActionPanel
    },
    'element': {
        'Alert': AlertFactory,
        'Button': ButtonFactory,
        'GlyphIcon': GlyphIconFactory
    }
};