var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanelFactory = require('../../../../../app/view/panel/utils/ActionPanelFactory');
var ActionFormGroupInputFactory = require('../../../../../app/view/panel/utils/ActionFormGroupInputFactory');

describe('Action Panel Factory', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create action panel with boolean form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createBooleanFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-boolean-id');
            expect(label).to.equal('Boolean Label');
            return createStubbedFormGroup('stubbed-boolean-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'boolean-id',
            'label': 'Boolean Label',
            'type': 'boolean'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-boolean-form-group"></div>'
        ));
    });

    it('should create action panel with date form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createDateFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-date-id');
            expect(label).to.equal('Date Label');
            return createStubbedFormGroup('stubbed-date-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'date-id',
            'label': 'Date Label',
            'type': 'date'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-date-form-group"></div>'
        ));
    });

    it('should create action panel with datetime form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createDatetimeFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-datetime-id');
            expect(label).to.equal('Datetime Label');
            return createStubbedFormGroup('stubbed-datetime-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'datetime-id',
            'label': 'Datetime Label',
            'type': 'datetime'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-datetime-form-group"></div>'
        ));
    });

    it('should create action panel with decimal form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createDecimalFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-decimal-id');
            expect(label).to.equal('Decimal Label');
            return createStubbedFormGroup('stubbed-decimal-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'decimal-id',
            'label': 'Decimal Label',
            'type': 'decimal'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-decimal-form-group"></div>'
        ));
    });

    it('should create action panel with integer form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createIntegerFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-integer-id');
            expect(label).to.equal('Integer Label');
            return createStubbedFormGroup('stubbed-integer-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'integer-id',
            'label': 'Integer Label',
            'type': 'integer'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-integer-form-group"></div>'
        ));
    });

    it('should create action panel with text form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createTextFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-text-id');
            expect(label).to.equal('Text Label');
            return createStubbedFormGroup('stubbed-text-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'text-id',
            'label': 'Text Label',
            'type': 'text'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-text-form-group"></div>'
        ));
    });

    it('should create action panel with password form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createPasswordFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-password-id');
            expect(label).to.equal('Password Label');
            return createStubbedFormGroup('stubbed-password-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'password-id',
            'label': 'Password Label',
            'type': 'password'
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-password-form-group"></div>'
        ));
    });

    it('should create action panel with single-selection form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createSingleSelectionFormGroup').callsFake(function (id, label, values) {
            expect(id).to.equal('panel-id-single-selection-id');
            expect(label).to.equal('Single Selection Label');
            expect(values).to.deep.equal([
                'First Value',
                'Second Value'
            ]);
            return createStubbedFormGroup('stubbed-single-selection-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'single-selection-id',
            'label': 'Single Selection Label',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-single-selection-form-group"></div>'
        ));
    });

    it('should create action panel with multiple-selection form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createMultipleSelectionFormGroup').callsFake(function (id, label, values) {
            expect(id).to.equal('panel-id-multiple-selection-id');
            expect(label).to.equal('Multiple Selection Label');
            expect(values).to.deep.equal([
                'First Value',
                'Second Value'
            ]);
            return createStubbedFormGroup('stubbed-multiple-selection-form-group');
        });

        var actionPanel = ActionPanelFactory.createActionPanel('panel-id', [{
            'id': 'multiple-selection-id',
            'label': 'Multiple Selection Label',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);

        expect(actionPanel.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-multiple-selection-form-group"></div>'
        ));
    });

    it('should create action panel with multiple form groups by order', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createTextFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-text-id');
            expect(label).to.equal('Text Label');
            return createStubbedFormGroup('stubbed-text-form-group');
        });
        sandbox.stub(ActionFormGroupInputFactory, 'createDateFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('panel-id-date-id');
            expect(label).to.equal('Date Label');
            return createStubbedFormGroup('stubbed-date-form-group');
        });

        var textConfigurationItem = {
            'id': 'text-id',
            'label': 'Text Label',
            'type': 'text'
        };
        var dateConfigurationItem = {
            'id': 'date-id',
            'label': 'Date Label',
            'type': 'date'
        };

        var actionPanelWithMultipleFormGroups = ActionPanelFactory.createActionPanel('panel-id', [textConfigurationItem, dateConfigurationItem]);
        expect(actionPanelWithMultipleFormGroups.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-text-form-group"></div><div id="stubbed-date-form-group"></div>'
        ));

        var actionPanelWithMultipleFormGroupsInOppositeOrder = ActionPanelFactory.createActionPanel('panel-id', [dateConfigurationItem, textConfigurationItem]);
        expect(actionPanelWithMultipleFormGroupsInOppositeOrder.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-date-form-group"></div><div id="stubbed-text-form-group"></div>'
        ));
    });

    function createStubbedFormGroup(id) {
        var formGroup = document.createElement('div');
        formGroup.id = id;
        return formGroup;
    }

    function createExpectedActionPanelWithContent(content) {
        return '<form id="panel-id-form" class="form-horizontal">'
            + content
            + '</form>';
    }
});