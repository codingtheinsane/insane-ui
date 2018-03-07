var expect = require('chai').expect;
var ButtonUtilities = require('../../../../../../app/view/panel/utils/element/ButtonUtilities');

describe('Button Utilities', function () {

    it('should disable button', function () {
        var button = {
            disabled: false
        };
        ButtonUtilities.disableButton(button);
        expect(button.disabled).to.be.true;
    });

    it('should enable button', function () {
        var button = {
            disabled: true
        };
        ButtonUtilities.enableButton(button);
        expect(button.disabled).to.be.false;
    });
});