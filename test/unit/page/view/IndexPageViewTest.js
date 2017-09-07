var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var sinon = require('sinon');
var IndexPageView = require('../../../../app/page/view/IndexPageView');
var UI = require('../../../../app/page/view/ui/UI');

describe('Index Page View', function () {

    jsdom();

    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should create log in panel with log in action panel configuration and append it to container', function (done) {
        sandbox.stub(UI.panel.Utilities);

        sandbox.stub(UI.element.GlyphIcon, 'USER').callsFake(function () {
            return 'User Glyph Icon';
        });

        sandbox.stub(UI.panel.ActionPanel, 'createActionPanel').callsFake(function (id, title, config) {
            expect(id).to.equal('page-index-login-panel');
            expect(title).to.equal('Login Panel');
            expect(id).to.equal('page-index-login-panel');
            expect(config).to.equal('Stubbed Log In Action Panel Configuration');
            return 'Stubbed Log In Panel';
        });

        sandbox.stub(UI.element.Button, 'createPrimaryButtonWithGlyphIcon').callsFake(function (id, glyphIcon, buttonText) {
            expect(id).to.equal('page-index-login-button');
            expect(glyphIcon).to.equal('User Glyph Icon');
            expect(buttonText).to.equal('Log In');
            return 'Stubbed Log In Button';
        });

        var stubbedModel = {
            getLogInActionPanelConfiguration: function () {
                return 'Stubbed Log In Action Panel Configuration';
            }
        };

        var stubbedContainer = {
            appendChild: function (panel) {
                expect(panel).to.equal('Stubbed Log In Panel');
                sinon.assert.calledOnce(UI.panel.Utilities.addButtonToBottomContainer);
                sinon.assert.calledWithExactly(UI.panel.Utilities.addButtonToBottomContainer, 'Stubbed Log In Panel', 'Stubbed Log In Button');
                done();
            }
        };

        IndexPageView.display(stubbedContainer, stubbedModel);
    });
});
