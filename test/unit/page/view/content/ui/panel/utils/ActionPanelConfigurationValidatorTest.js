var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ActionPanelConfigurationValidator = require('../../../../../../../../app/page/view/content/ui/panel/utils/ActionPanelConfigurationValidator');

describe('Action Panel Configuration Validator', function () {

    jsdom();

    it('should not validate non existent configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration();
        expect(validation).to.be.false;
    });

    it('should not validate invalid configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration('not an array');
        expect(validation).to.be.false;
    });

    it('should not validate empty configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([]);
        expect(validation).to.be.false;
    });

    it('should not validate configuration with missing type', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate configuration with invalid type', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'values': [
                'First Value',
                'Second Value'
            ],
            'id': 'valid-id',
            'type': 'invalid-type'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate boolean configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate boolean configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'boolean'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate boolean configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'boolean'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate boolean configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate boolean configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate date configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate date configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'date'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate date configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'date'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate date configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate date configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate datetime configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate datetime configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'datetime'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate datetime configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'datetime'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate datetime configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate datetime configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate decimal configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate decimal configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'decimal'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate decimal configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'decimal'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate decimal configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate decimal configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate integer configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate integer configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'integer'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate integer configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'integer'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate integer configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate integer configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate text configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate text configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'text'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate text configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'text'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate text configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate text configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate password configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validation).to.be.true;
    });

    it('should not validate password configuration with missing id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'type': 'password'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate password configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'password'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate password configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate password configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validation).to.be.false;
    });

    it('should validate single selection configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
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
            'label': 'Valid Label',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
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
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with missing values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': 'not an array'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with empty values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': []
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate single selection configuration with anything other than strings on values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validation).to.be.false;
    });

    it('should validate multiple selection configuration', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
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
            'label': 'Valid Label',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with anything other than a string on id', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with missing label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with anything other than a string on label', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
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
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with missing values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': 'not an array'
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with empty values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': []
        }]);
        expect(validation).to.be.false;
    });

    it('should not validate multiple selection configuration with anything other than strings on values array', function () {
        var validation = ActionPanelConfigurationValidator.validateConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validation).to.be.false;
    });

    it('should validate multiple configuration items', function () {
        var FIRST_CONFIGURATION_ITEM = {
            'label': 'Valid Multiple Selection Configuration Item',
            'id': 'valid-multiple-selection-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        };
        var SECOND_CONFIGURATION_ITEM = {
            'label': 'Valid Text Configuration Item',
            'id': 'valid-text-id',
            'type': 'text',
            'values': [
                'First Value',
                'Second Value'
            ]
        };
        expect(ActionPanelConfigurationValidator.validateConfiguration([FIRST_CONFIGURATION_ITEM, SECOND_CONFIGURATION_ITEM])).to.be.true;
    });

    it('should not validate multiple configuration items', function () {
        var FIRST_CONFIGURATION_ITEM = {
            'label': 'Valid Multiple Selection Configuration Item',
            'id': 'valid-multiple-selection-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        };
        var SECOND_CONFIGURATION_ITEM = {
            'label': 'Invalid Text Configuration Item',
            'type': 'text',
            'values': [
                'First Value',
                'Second Value'
            ]
        };
        expect(ActionPanelConfigurationValidator.validateConfiguration([FIRST_CONFIGURATION_ITEM, SECOND_CONFIGURATION_ITEM])).to.be.false;
        expect(ActionPanelConfigurationValidator.validateConfiguration([SECOND_CONFIGURATION_ITEM, FIRST_CONFIGURATION_ITEM])).to.be.false;
    });

    it('should remove not valid non existent configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration();
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid invalid configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration('not an array');
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid empty configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid configuration with missing type', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid configuration with invalid type', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'values': [
                'First Value',
                'Second Value'
            ],
            'id': 'valid-id',
            'type': 'invalid-type'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid boolean configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'boolean'
        }]);
    });

    it('should remove not valid boolean configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid boolean configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid boolean configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid boolean configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'boolean'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid date configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'date'
        }]);
    });

    it('should remove not valid date configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid date configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid date configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid date configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'date'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid datetime configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'datetime'
        }]);
    });

    it('should remove not valid datetime configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid datetime configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid datetime configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid datetime configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'datetime'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid decimal configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'decimal'
        }]);
    });

    it('should remove not valid decimal configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid decimal configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid decimal configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid decimal configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'decimal'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid integer configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'integer'
        }]);
    });

    it('should remove not valid integer configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid integer configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid integer configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid integer configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'integer'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid text configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'text'
        }]);
    });

    it('should remove not valid text configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid text configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid text configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid text configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'text'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid password configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'password'
        }]);
    });

    it('should remove not valid password configuration with missing id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid password configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid password configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid password configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
            'type': 'password'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid single selection configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
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
            'label': 'Valid Label',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
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
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with missing values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': 'not an array'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with empty values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': []
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid single selection configuration with anything other than strings on values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'single-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should not remove valid multiple selection configuration', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.deep.equal([{
            'label': 'Valid Label',
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
            'label': 'Valid Label',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with anything other than a string on id', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': {
                'invalid': 'id'
            },
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with missing label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with anything other than a string on label', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': {
                'invalid': 'label'
            },
            'id': 'valid-id',
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
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with missing values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': 'not an array'
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with empty values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': []
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove not valid multiple selection configuration with anything other than strings on values array', function () {
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([{
            'label': 'Valid Label',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [{'not': 'a string'}]
        }]);
        expect(validatedConfiguration).to.be.empty;
    });

    it('should remove multiple invalid configuration items and not remove multiple valid configuration items', function () {
        var INITIAL_CONFIGURATION = [{
            'label': 'Valid Multiple Selection Configuration Item',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }, {
            'label': 'Invalid Password Configuration Item',
            'type': 'password',
        }, {
            'label': 'Invalid Single Selection Configuration Item',
            'id': {
                'invalid': 'id'
            },
            'type': 'single-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }, {
            'label': 'Valid Text Configuration Item',
            'id': 'valid-text-id',
            'type': 'text'
        }];
        var EXPECTED_VALIDATED_CONFIGURATION = [{
            'label': 'Valid Multiple Selection Configuration Item',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        }, {
            'label': 'Valid Text Configuration Item',
            'id': 'valid-text-id',
            'type': 'text'
        }];
        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration(INITIAL_CONFIGURATION);
        expect(validatedConfiguration).to.deep.equal(EXPECTED_VALIDATED_CONFIGURATION);
    });

    it('should maintain configuration items order', function () {
        var FIRST_CONFIGURATION_ITEM = {
            'label': 'Valid Multiple Selection Configuration Item',
            'id': 'valid-id',
            'type': 'multiple-selection',
            'values': [
                'First Value',
                'Second Value'
            ]
        };
        var SECOND_CONFIGURATION_ITEM = {
            'label': 'Valid Text Configuration Item',
            'id': 'valid-text-id',
            'type': 'text'
        };

        var validatedConfiguration = ActionPanelConfigurationValidator.removeInvalidConfiguration([FIRST_CONFIGURATION_ITEM, SECOND_CONFIGURATION_ITEM]);
        expect(validatedConfiguration).to.deep.equal([FIRST_CONFIGURATION_ITEM, SECOND_CONFIGURATION_ITEM]);

        var validatedConfigurationWithOppositeOrder = ActionPanelConfigurationValidator.removeInvalidConfiguration([SECOND_CONFIGURATION_ITEM, FIRST_CONFIGURATION_ITEM]);
        expect(validatedConfigurationWithOppositeOrder).to.deep.equal([SECOND_CONFIGURATION_ITEM, FIRST_CONFIGURATION_ITEM]);
    });
});