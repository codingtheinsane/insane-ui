var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var InputFactory = require('../../../../../../../../app/page/view/content/ui/panel/utils/InputFactory');
var ActionFormGroupInputFactory = require('../../../../../../../../app/page/view/content/ui/panel/utils/ActionFormGroupInputFactory');

describe('Action Form Group Input Factory', function () {

    jsdom();

    function createExpectedFormGroupOutterHtmlForInput(inputInnerHtml) {
        return '<div id="input-id-form-group" class="form-group">'
            + '<label id="input-id-label" class="control-label col-xs-2 col-sm-2 col-md-2 col-lg-2" for="input-id">Input Label</label>'
            + '<div id="input-id-form-group-selection" class="col-xs-10 col-sm-10 col-md-10 col-lg-10">'
            + inputInnerHtml
            + '</div>'
            + '</div>';
    }

    function createStubbedInputFactoryResponseWithId(inputId) {
        var element = document.createElement('div');
        element.id = inputId;
        return element;
    }

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        sandbox.stub(InputFactory, 'createBooleanInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-boolean-input');
        });
        sandbox.stub(InputFactory, 'createDateInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-date-input');
        });
        sandbox.stub(InputFactory, 'createDateTimeInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-date-time-input');
        });
        sandbox.stub(InputFactory, 'createDecimalInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-decimal-input');
        });
        sandbox.stub(InputFactory, 'createIntegerInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-integer-input');
        });
        sandbox.stub(InputFactory, 'createTextInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-text-input');
        });
        sandbox.stub(InputFactory, 'createPasswordInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-password-input');
        });
        sandbox.stub(InputFactory, 'createSingleSelectionInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-single-selection-input');
        });
        sandbox.stub(InputFactory, 'createMultipleSelectionInput').callsFake(function () {
            return createStubbedInputFactoryResponseWithId('stubbed-multiple-selection-input');
        });
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create boolean input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createBooleanFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createBooleanInput);
        sinon.assert.calledWithExactly(InputFactory.createBooleanInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-boolean-input"></div>'
        ));
    });

    it('should create date input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createDateFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createDateInput);
        sinon.assert.calledWithExactly(InputFactory.createDateInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-date-input"></div>'
        ));
    });

    it('should create date time input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createDatetimeFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createDateTimeInput);
        sinon.assert.calledWithExactly(InputFactory.createDateTimeInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-date-time-input"></div>'
        ));
    });

    it('should create integer input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createIntegerFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createIntegerInput);
        sinon.assert.calledWithExactly(InputFactory.createIntegerInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-integer-input"></div>'
        ));
    });

    it('should create decimal input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createDecimalFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createDecimalInput);
        sinon.assert.calledWithExactly(InputFactory.createDecimalInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-decimal-input"></div>'
        ));
    });

    it('should create text input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createTextFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createTextInput);
        sinon.assert.calledWithExactly(InputFactory.createTextInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-text-input"></div>'
        ));
    });

    it('should create password input form group', function () {
        var inputFormGroup = ActionFormGroupInputFactory.createPasswordFormGroup('input-id', 'Input Label');

        sinon.assert.calledOnce(InputFactory.createPasswordInput);
        sinon.assert.calledWithExactly(InputFactory.createPasswordInput, 'input-id');

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-password-input"></div>'
        ));
    });

    it('should create single selection input form group', function () {
        var selectionValues = [
            'some',
            'selection',
            'values'
        ];
        var inputFormGroup = ActionFormGroupInputFactory.createSingleSelectionFormGroup('input-id', 'Input Label', selectionValues);

        sinon.assert.calledOnce(InputFactory.createSingleSelectionInput);
        sinon.assert.calledWithExactly(InputFactory.createSingleSelectionInput, 'input-id', selectionValues);

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-single-selection-input"></div>'
        ));
    });

    it('should create multiple selection input form group', function () {
        var selectionValues = [
            'some',
            'selection',
            'values'
        ];
        var inputFormGroup = ActionFormGroupInputFactory.createMultipleSelectionFormGroup('input-id', 'Input Label', selectionValues);

        sinon.assert.calledOnce(InputFactory.createMultipleSelectionInput);
        sinon.assert.calledWithExactly(InputFactory.createMultipleSelectionInput, 'input-id', selectionValues);

        expect(inputFormGroup.outerHTML).to.equal(createExpectedFormGroupOutterHtmlForInput(
            '<div id="stubbed-multiple-selection-input"></div>'
        ));
    });
});