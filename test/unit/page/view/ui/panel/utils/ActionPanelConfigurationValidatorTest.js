var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ActionPanelConfigurationValidator = require('../../../../../../../app/page/view/ui/panel/utils/ActionPanelConfigurationValidator');

describe('Action Panel Configuration Validator', function () {

    jsdom();

    it('should not validate configuration with missing type', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate configuration with invalid type', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'invalid-type'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate boolean configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate boolean configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'boolean'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate date configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate date configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'date'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate datetime configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate datetime configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'datetime'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate decimal configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate decimal configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'decimal'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate integer configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate integer configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'integer'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate password configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate password configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'password'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate text configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate text configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'text'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate single selection configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate single selection configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with missing values', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with missing values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': 'not an array'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with empty values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': []
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with anything other than strings on values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validation).to.be.false;
    });

    it('should validate multiple selection configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate multiple selection configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with missing values', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with missing values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': 'not an array'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with empty values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': []
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with anything other than strings on values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validation).to.be.false;
    });

    it('should remove not valid configuration with missing type', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid configuration with invalid type', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'invalid-type'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove boolean configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'boolean'
        }]);
    });

    it('should remove not valid boolean configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove date configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'date'
        }]);
    });

    it('should remove not valid date configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove datetime configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'datetime'
        }]);
    });

    it('should remove not valid datetime configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove decimal configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'decimal'
        }]);
    });

    it('should remove not valid decimal configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove integer configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'integer'
        }]);
    });

    it('should remove not valid integer configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove password configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'password'
        }]);
    });

    it('should remove not valid password configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove text configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'text'
        }]);
    });

    it('should remove not valid text configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove single selection configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
    });

    it('should remove not valid single selection configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with missing values', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with missing values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': 'not an array'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with empty values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': []
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with anything other than strings on values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove multiple selection configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
    });

    it('should remove not valid multiple selection configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with missing values', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with missing values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': 'not an array'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with empty values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': []
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with anything other than strings on values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });
});