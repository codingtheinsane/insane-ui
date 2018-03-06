var AlertFactory = require('./panel/utils/element/AlertFactory');
var ButtonFactory = require('./panel/utils/element/ButtonFactory');
var GlyphIconFactory = require('./panel/utils/element/GlyphIconFactory');

var ActionPanelAPI = require('./panel/ActionPanelAPI');
var MenuPanelAPI = require('./panel/MenuPanelAPI');

module.exports = {
    'panel': {
        'ActionPanel': ActionPanelAPI,
        'MenuPanel': MenuPanelAPI
    },
    'element': {
        'Alert': AlertFactory,
        'Button': ButtonFactory,
        'GlyphIcon': GlyphIconFactory
    }
};