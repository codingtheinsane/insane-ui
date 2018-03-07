var ActionPanelAPI = require('./panel/ActionPanelAPI');
var AlertAPI = require('./panel/AlertAPI');
var ButtonAPI = require('./panel/ButtonAPI');
var GlyphIconAPI = require('./panel/GlyphIconAPI');
var MenuPanelAPI = require('./panel/MenuPanelAPI');

module.exports = {
    'panel': {
        'ActionPanel': ActionPanelAPI,
        'MenuPanel': MenuPanelAPI
    },
    'element': {
        'Alert': AlertAPI,
        'Button': ButtonAPI,
        'GlyphIcon': GlyphIconAPI
    }
};