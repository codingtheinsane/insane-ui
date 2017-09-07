var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ElementFactory = require('../../../../../../../../../app/page/view/content/ui/panel/utils/element/ElementFactory');

describe('Element Factory', function () {

    jsdom();

    it('should create element with id', function () {
        var element = ElementFactory.createElementWithId('div', 'anElementId');
        expect(element.outerHTML).to.equal('<div id="anElementId"></div>');
    });

    it('should create element with id and single class name', function () {
        var element = ElementFactory.createElementWithIdAndClassName('div', 'anElementId', 'anElementClassName');
        expect(element.outerHTML).to.equal('<div id="anElementId" class="anElementClassName"></div>');
    });

    it('should create element with id and multiple class names', function () {
        var element = ElementFactory.createElementWithIdAndClassName('button', 'anElementId', 'anElementClassName aSecondElementClassName');
        expect(element.outerHTML).to.equal('<button id="anElementId" class="anElementClassName aSecondElementClassName"></button>');
    });

    it('should create element with id and text node', function () {
        var element = ElementFactory.createElementWithIdAndTextNode('div', 'anElementId', 'Text Node Content');
        expect(element.outerHTML).to.equal('<div id="anElementId">Text Node Content</div>');
    });

    it('should create element with id, single class name and text node', function () {
        var element = ElementFactory.createElementWithIdClassNameAndTextNode('button', 'anElementId', 'anElementClassName', 'Text Node Content');
        expect(element.outerHTML).to.equal('<button id="anElementId" class="anElementClassName">Text Node Content</button>');
    });

    it('should create element with id, multiple class names and text node', function () {
        var element = ElementFactory.createElementWithIdClassNameAndTextNode('div', 'anElementId', 'anElementClassName aSecondElementClassName', 'Text Node Content');
        expect(element.outerHTML).to.equal('<div id="anElementId" class="anElementClassName aSecondElementClassName">Text Node Content</div>');
    });
});