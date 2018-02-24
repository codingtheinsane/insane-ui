var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ElementFactory = require('../../../../../../app/view/panel/utils/element/ElementFactory');
var ElementDestructor = require('../../../../../../app/view/panel/utils/element/ElementDestructor');

describe('Element Factory', function () {

    jsdom();

    it('should destruct an element', function () {
        var container = ElementFactory.createElementWithId('div', 'container');
        var element = ElementFactory.createElementWithId('div', 'element');
        container.appendChild(element);

        expect(container.innerHTML).to.equal(element.outerHTML);

        ElementDestructor.destructElement(element);

        expect(container.innerHTML).to.equal('');
    });

    it('should only destruct the element', function () {
        var container = ElementFactory.createElementWithId('div', 'container');
        var element = ElementFactory.createElementWithId('div', 'element');
        var secondElement = ElementFactory.createElementWithId('div', 'second-element');
        container.appendChild(element);
        container.appendChild(secondElement);

        expect(container.innerHTML).to.equal(element.outerHTML + secondElement.outerHTML);

        ElementDestructor.destructElement(element);

        expect(container.innerHTML).to.equal(secondElement.outerHTML);
    });
});