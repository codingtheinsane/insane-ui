var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ActionPanelDataRetriever = require('../../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelDataRetriever');

describe('Action Panel Data Retriever', function () {

    jsdom();

    it('should retrieve data from input', function () {
        var container = createContainer(createInput('input-id', 'input-type', 'Input Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve missing input id as empty', function () {
        var input = document.createElement('input');
        input.className = 'ui-form-input ui-form-input-type-input-type';
        input.value = 'Input Value';
        var container = createContainer(input);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': '',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve input id without container prefix', function () {
        var container = createContainer(createInput('container-id-input-id', 'input-type', 'Input Value'));
        container.id = 'container-id';
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve input id without form prefix', function () {
        var container = createContainer(createInput('container-id-form-input-id', 'input-type', 'Input Value'));
        container.id = 'container-id';
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve missing input type as empty', function () {
        var input = document.createElement('input');
        input.className = 'ui-form-input';
        input.value = 'Input Value';
        input.id = 'input-id';
        var container = createContainer(input);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': '',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve missing input value as empty', function () {
        var input = document.createElement('input');
        input.className = 'ui-form-input ui-form-input-type-input-type';
        input.id = 'input-id';
        var container = createContainer(input);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': ''
        }]);
    });

    it('should retrieve data from input div', function () {
        var container = createContainer(createInputDiv('input-div-id', 'input-div-type', 'Option Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-div-id',
            'type': 'input-div-type',
            'value': 'Option Value'
        }]);
    });

    it('should retrieve value from div input filter option', function () {
        var container = createContainer(createInputDiv('input-id', 'input-type', 'Input Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should trim value from div input filter option', function () {
        var container = createContainer(createInputDiv('input-id', 'input-type', '    Input Value    '));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve multiple values from div input filter option', function () {
        var container = createContainer(createInputDiv('input-id', 'input-type', 'First Value,Second Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'First Value,Second Value'
        }]);
    });

    it('should trim multiple values from div input filter option', function () {
        var container = createContainer(createInputDiv('input-id', 'input-type', '   First Value   ,   Second Value   '));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'First Value,Second Value'
        }]);
    });

    it('should retrieve empty value from div input filter option if missing', function () {
        var inputDiv = document.createElement('div');
        inputDiv.className = 'ui-form-input ui-form-input-type-input-type';
        inputDiv.id = 'input-id';

        var container = createContainer(inputDiv);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': ''
        }]);
    });

    it('should retrieve input div id without container prefix', function () {
        var container = createContainer(createInputDiv('container-id-input-id', 'input-type', 'Input Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve empty input div id', function () {
        var container = createContainer(createInputDiv('', 'input-type', 'Input Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': '',
            'type': 'input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve missing input div id as empty', function () {
        var container = document.createElement('div');
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([]);
    });

    it('should retrieve input div type', function () {
        var container = createContainer(createInputDiv('input-id', 'specific-input-type', 'Input Value'));
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': 'specific-input-type',
            'value': 'Input Value'
        }]);
    });

    it('should retrieve missing input div type as empty', function () {
        var inputDiv = document.createElement('div');
        inputDiv.className = 'ui-form-input';
        inputDiv.id = 'input-id';

        var container = createContainer(inputDiv);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([{
            'id': 'input-id',
            'type': '',
            'value': ''
        }]);
    });

    it('should not retrieve data from selection as data is contained in the div itself', function () {
        var selection = document.createElement('select');
        selection.className = 'ui-form-input ui-form-input-type-input-type';
        selection.id = 'input-id';
        var option = document.createElement('option');
        option.className = 'filter-option';
        option.appendChild(document.createTextNode('Input Value'));
        selection.appendChild(option);

        var container = createContainer(selection);
        expect(ActionPanelDataRetriever.retrieveActionPanelData(container)).to.deep.equal([]);
    });

    function createContainer(input) {
        var container = document.createElement('div');
        container.id = 'container-id';
        container.appendChild(input);
        return container;
    }

    function createInput(id, type, value) {
        var input = document.createElement('input');
        input.className = 'ui-form-input ui-form-input-type-' + type;
        input.id = id;
        input.value = value;
        return input;
    }

    function createInputDiv(id, type, value) {
        var div = document.createElement('div');
        div.className = 'ui-form-input ui-form-input-type-' + type;
        div.id = id;
        var filterOption = document.createElement('div');
        filterOption.className = 'filter-option';
        filterOption.appendChild(document.createTextNode(value));
        div.appendChild(filterOption);
        return div;
    }
});