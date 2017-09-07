var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var ActionPanel = require('../../../../../../../app/page/view/content/ui/panel/ActionPanel');
var ActionPanelConfigurationValidator = require('../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelConfigurationValidator');
var ActionFormGroupInputFactory = require('../../../../../../../app/page/view/content/ui/panel/utils/ActionFormGroupInputFactory');

describe('Action Panel', function () {

    jsdom();

    var sandbox;

    function createStubbedFormGroup(id) {
        var formGroup = document.createElement('div');
        formGroup.id = id;
        return formGroup;
    }

    function createExpectedActionPanelWithContent(content) {
        return '<div id="panel-id" class="panel panel-default">'
            + '<div id="panel-id-heading" class="panel-heading">Panel Title</div>'
            + '<div id="panel-id-body" class="panel-body">'
            + '<div id="panel-id-alert-top-container" class="ui-alert-top-container"></div>'
            + '<div id="panel-id-button-top-container" class="ui-button-top-container"></div>'
            + '<div id="panel-id-body-content" class="ui-body-content-container">'
            + '<form id="panel-id-form" class="form-horizontal">'
            + content
            + '</form></div>'
            + '<div id="panel-id-alert-bottom-container" class="ui-alert-bottom-container"></div>'
            + '<div id="panel-id-button-bottom-container" class="ui-button-bottom-container"></div>'
            + '</div></div>';
    }

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create action panel with boolean form group', function () {
        sandbox.stub(ActionFormGroupInputFactory, 'createBooleanFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('boolean-id');
            expect(label).to.equal('Boolean Label');
            return createStubbedFormGroup('stubbed-boolean-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('date-id');
            expect(label).to.equal('Date Label');
            return createStubbedFormGroup('stubbed-date-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('datetime-id');
            expect(label).to.equal('Datetime Label');
            return createStubbedFormGroup('stubbed-datetime-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('decimal-id');
            expect(label).to.equal('Decimal Label');
            return createStubbedFormGroup('stubbed-decimal-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('integer-id');
            expect(label).to.equal('Integer Label');
            return createStubbedFormGroup('stubbed-integer-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('text-id');
            expect(label).to.equal('Text Label');
            return createStubbedFormGroup('stubbed-text-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('password-id');
            expect(label).to.equal('Password Label');
            return createStubbedFormGroup('stubbed-password-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('single-selection-id');
            expect(label).to.equal('Single Selection Label');
            expect(values).to.deep.equal([
                'First Value',
                'Second Value'
            ]);
            return createStubbedFormGroup('stubbed-single-selection-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('multiple-selection-id');
            expect(label).to.equal('Multiple Selection Label');
            expect(values).to.deep.equal([
                'First Value',
                'Second Value'
            ]);
            return createStubbedFormGroup('stubbed-multiple-selection-form-group');
        });

        var actionPanel = ActionPanel.createActionPanel('panel-id', 'Panel Title', [{
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
            expect(id).to.equal('text-id');
            expect(label).to.equal('Text Label');
            return createStubbedFormGroup('stubbed-text-form-group');
        });
        sandbox.stub(ActionFormGroupInputFactory, 'createDateFormGroup').callsFake(function (id, label) {
            expect(id).to.equal('date-id');
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

        var actionPanelWithMultipleFormGroups = ActionPanel.createActionPanel('panel-id', 'Panel Title', [textConfigurationItem, dateConfigurationItem]);
        expect(actionPanelWithMultipleFormGroups.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-text-form-group"></div><div id="stubbed-date-form-group"></div>'
        ));

        var actionPanelWithMultipleFormGroupsInOppositeOrder = ActionPanel.createActionPanel('panel-id', 'Panel Title', [dateConfigurationItem, textConfigurationItem]);
        expect(actionPanelWithMultipleFormGroupsInOppositeOrder.outerHTML).to.equal(createExpectedActionPanelWithContent(
            '<div id="stubbed-date-form-group"></div><div id="stubbed-text-form-group"></div>'
        ));
    });

    it('should validate panel configuration', function () {
        sandbox.stub(ActionPanelConfigurationValidator, 'validateConfiguration').callsFake(function (panelConfiguration) {
            expect(panelConfiguration).to.equal('Stubbed Panel Configuration');
            return 'Stubbed Verification Result';
        });
        expect(ActionPanel.validateActionPanelConfiguration('Stubbed Panel Configuration')).to.equal('Stubbed Verification Result');
    });
});