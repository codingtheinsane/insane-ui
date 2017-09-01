var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var InputFactory = require('../../../../../../app/page/view/panel/utils/InputFactory');

describe('Input Factory', function () {

    jsdom();

    it('should create boolean input', function () {
        var input = InputFactory.createBooleanInput('boolean-input-id');
        expect(input.outerHTML).to.equal(
            '<select id="boolean-input-id" class="selectpicker form-control ui-form-input ui-form-input-boolean">'
            + '<option id="boolean-input-id-option-0"></option>'
            + '<option id="boolean-input-id-option-1">True</option>'
            + '<option id="boolean-input-id-option-2">False</option>'
            + '</select>'
        );
    });

    it('should create date input', function () {
        var input = InputFactory.createDateInput('date-input-id');
        expect(input.outerHTML).to.equal(
            '<input id="date-input-id" class="form-control ui-form-input ui-form-input-date" type="date">'
        );
    });

    it('should create date time input', function () {
        var input = InputFactory.createDateTimeInput('date-time-input-id');
        expect(input.outerHTML).to.equal(
            '<input id="date-time-input-id" class="form-control ui-form-input ui-form-input-date-time" type="datetime-local">'
        );
    });

    it('should create decimal input', function () {
        var input = InputFactory.createDecimalInput('decimal-input-id');
        expect(input.outerHTML).to.equal(
            '<input id="decimal-input-id" class="form-control ui-form-input ui-form-input-decimal" type="number">'
        );
    });

    it('should create integer input', function () {
        var input = InputFactory.createIntegerInput('integer-input-id');
        expect(input.outerHTML).to.equal(
            '<input id="integer-input-id" class="form-control ui-form-input ui-form-input-integer" type="number">'
        );
    });

    it('should create text input', function () {
        var input = InputFactory.createTextInput('text-input-id');
        expect(input.outerHTML).to.equal(
            '<input id="text-input-id" class="form-control ui-form-input ui-form-input-text" type="text">'
        );
    });

    it('should create single selection input', function () {
        var input = InputFactory.createSingleSelectionInput('single-selection-input-id', [
            'First Option',
            'Second Option'
        ]);
        expect(input.outerHTML).to.equal(
            '<select id="single-selection-input-id" class="selectpicker form-control ui-form-input ui-form-input-single-selection">'
            + '<option id="single-selection-input-id-option-0">First Option</option>'
            + '<option id="single-selection-input-id-option-1">Second Option</option>'
            + '</select>'
        );
    });

    it('should create single selection input with search for more than 5 values', function () {
        var input = InputFactory.createSingleSelectionInput('single-selection-input-id', [
            'First Option',
            'Second Option',
            'Third Option',
            'Fourth Option',
            'Fifth Option',
            'Sixth Option'
        ]);
        expect(input.outerHTML).to.equal(
            '<select id="single-selection-input-id" class="selectpicker form-control ui-form-input ui-form-input-single-selection" data-live-search="true">'
            + '<option id="single-selection-input-id-option-0">First Option</option>'
            + '<option id="single-selection-input-id-option-1">Second Option</option>'
            + '<option id="single-selection-input-id-option-2">Third Option</option>'
            + '<option id="single-selection-input-id-option-3">Fourth Option</option>'
            + '<option id="single-selection-input-id-option-4">Fifth Option</option>'
            + '<option id="single-selection-input-id-option-5">Sixth Option</option>'
            + '</select>'
        );
    });

    it('should create multiple selection input', function () {
        var input = InputFactory.createMultipleSelectionInput('multiple-selection-input-id', [
            'First Option',
            'Second Option'
        ]);
        expect(input.outerHTML).to.equal(
            '<select id="multiple-selection-input-id" class="selectpicker form-control ui-form-input ui-form-input-multiple-selection" multiple="true">'
            + '<option id="multiple-selection-input-id-option-0">First Option</option>'
            + '<option id="multiple-selection-input-id-option-1">Second Option</option>'
            + '</select>'
        );
    });

    it('should create multiple selection input with search for more than 5 values', function () {
        var input = InputFactory.createMultipleSelectionInput('multiple-selection-input-id', [
            'First Option',
            'Second Option',
            'Third Option',
            'Fourth Option',
            'Fifth Option',
            'Sixth Option'
        ]);
        expect(input.outerHTML).to.equal(
            '<select id="multiple-selection-input-id" class="selectpicker form-control ui-form-input ui-form-input-multiple-selection" data-live-search="true" multiple="true">'
            + '<option id="multiple-selection-input-id-option-0">First Option</option>'
            + '<option id="multiple-selection-input-id-option-1">Second Option</option>'
            + '<option id="multiple-selection-input-id-option-2">Third Option</option>'
            + '<option id="multiple-selection-input-id-option-3">Fourth Option</option>'
            + '<option id="multiple-selection-input-id-option-4">Fifth Option</option>'
            + '<option id="multiple-selection-input-id-option-5">Sixth Option</option>'
            + '</select>'
        );
    });
});