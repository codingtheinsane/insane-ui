var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ElementFactory = require('../../../../../../../app/page/view/ui/panel/utils/element/ElementFactory');
var PanelContainerFactory = require('../../../../../../../app/page/view/ui/panel/utils/PanelContainerFactory');
var PanelContainerUtilities = require('../../../../../../../app/page/view/ui/panel/utils/PanelContainerUtilities');

describe('Panel Container Utilities', function () {

    jsdom();

    var DEFAULT_PANEL_CONTENT = createExpectedPanelContent('', '', '', '', '');

    function createExpectedPanelContent(alertTopContainerInnerHtml, buttonTopContainerInnerHtml,
                                        contentContainerInnerHtml,
                                        alertBottomContainerInnerHtml, buttonBottomContainerInnerHtml) {
        return '<div id="panel-id" class="panel panel-default">'
            + '<div id="panel-id-heading" class="panel-heading">Panel Title</div>'
            + '<div id="panel-id-body" class="panel-body">'
            + '<div id="panel-id-alert-top-container" class="ui-alert-top-container">'
            + alertTopContainerInnerHtml
            + '</div>'
            + '<div id="panel-id-button-top-container" class="ui-button-top-container">'
            + buttonTopContainerInnerHtml
            + '</div>'
            + '<div id="panel-id-body-content" class="ui-body-content-container">'
            + contentContainerInnerHtml
            + '</div>'
            + '<div id="panel-id-alert-bottom-container" class="ui-alert-bottom-container">'
            + alertBottomContainerInnerHtml
            + '</div>'
            + '<div id="panel-id-button-bottom-container" class="ui-button-bottom-container">'
            + buttonBottomContainerInnerHtml
            + '</div></div></div>';
    }

    function createExpectedAlertTopContainerContent(alertTopContainerInnerHtml) {
        return createExpectedPanelContent(alertTopContainerInnerHtml, '', '', '', '');
    }

    function createExpectedButtonTopContainerContent(buttonTopContainerInnerHtml) {
        return createExpectedPanelContent('', buttonTopContainerInnerHtml, '', '', '');
    }

    function createExpectedBodyContainerContent(contentContainerInnerHtml) {
        return createExpectedPanelContent('', '', contentContainerInnerHtml, '', '');
    }

    function createExpectedAlertBottomContainerContent(alertBottomContainerInnerHtml) {
        return createExpectedPanelContent('', '', '', alertBottomContainerInnerHtml, '');
    }

    function createExpectedButtonBottomContainerContent(buttonBottomContainerInnerHtml) {
        return createExpectedPanelContent('', '', '', '', buttonBottomContainerInnerHtml);
    }

    it('should add alert to bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var alert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(alert.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addAlertToBottomContainer(panel, alert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add alert to top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertTopContainerContent(alert.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addAlertToTopContainer(panel, alert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add button to bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var button = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(button.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addButtonToBottomContainer(panel, button);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add button to top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var button = ElementFactory.createElementWithId('button', 'bottom-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonTopContainerContent(button.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addButtonToTopContainer(panel, button);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add content to container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var EXPECTED_PANEL_CONTENT = createExpectedBodyContainerContent(content.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addContentToContainer(panel, content);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add content to all containers', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var topAlert = ElementFactory.createElementWithId('div', 'top-alert');
        var topButton = ElementFactory.createElementWithId('button', 'top-button');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var bottomAlert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var bottomButton = ElementFactory.createElementWithId('button', 'bottom-button');

        var EXPECTED_PANEL_CONTENT = createExpectedPanelContent(
            topAlert.outerHTML, topButton.outerHTML,
            content.outerHTML,
            bottomAlert.outerHTML, bottomButton.outerHTML);

        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addAlertToTopContainer(panel, topAlert);
        PanelContainerUtilities.addButtonToTopContainer(panel, topButton);
        PanelContainerUtilities.addContentToContainer(panel, content);
        PanelContainerUtilities.addAlertToBottomContainer(panel, bottomAlert);
        PanelContainerUtilities.addButtonToBottomContainer(panel, bottomButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add multiple alerts to bottom container by order', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addAlertToBottomContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToBottomContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add multiple alerts to top container by order', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addAlertToBottomContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToBottomContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });



    it('should add multiple buttons to bottom container by order', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'top-button');
        var secondButton = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addButtonToBottomContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToBottomContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add multiple buttons to top container by order', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'top-button');
        var secondButton = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addButtonToBottomContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToBottomContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should add multiple content to container by order', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var someContent = ElementFactory.createElementWithId('div', 'some-content');
        var someOtherContent = ElementFactory.createElementWithId('div', 'some-other-content');
        var EXPECTED_PANEL_CONTENT = createExpectedBodyContainerContent(someContent.outerHTML + someOtherContent.outerHTML);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);

        PanelContainerUtilities.addContentToContainer(panel, someContent);
        PanelContainerUtilities.addContentToContainer(panel, someOtherContent);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should clear alert from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(alert.outerHTML);
        PanelContainerUtilities.addAlertToBottomContainer(panel, alert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearAlertBottomContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear alert from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertTopContainerContent(alert.outerHTML);
        PanelContainerUtilities.addAlertToTopContainer(panel, alert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearAlertTopContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear button from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var button = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(button.outerHTML);
        PanelContainerUtilities.addButtonToBottomContainer(panel, button);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearButtonBottomContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear button from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var button = ElementFactory.createElementWithId('button', 'bottom-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonTopContainerContent(button.outerHTML);
        PanelContainerUtilities.addButtonToTopContainer(panel, button);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearButtonTopContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear content from container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var EXPECTED_PANEL_CONTENT = createExpectedBodyContainerContent(content.outerHTML);
        PanelContainerUtilities.addContentToContainer(panel, content);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearContentContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear content from all containers', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var topAlert = ElementFactory.createElementWithId('div', 'top-alert');
        var topButton = ElementFactory.createElementWithId('button', 'top-button');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var bottomAlert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var bottomButton = ElementFactory.createElementWithId('button', 'bottom-button');

        var EXPECTED_PANEL_CONTENT = createExpectedPanelContent(
            topAlert.outerHTML, topButton.outerHTML,
            content.outerHTML,
            bottomAlert.outerHTML, bottomButton.outerHTML);

        PanelContainerUtilities.addAlertToTopContainer(panel, topAlert);
        PanelContainerUtilities.addButtonToTopContainer(panel, topButton);
        PanelContainerUtilities.addContentToContainer(panel, content);
        PanelContainerUtilities.addAlertToBottomContainer(panel, bottomAlert);
        PanelContainerUtilities.addButtonToBottomContainer(panel, bottomButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearAlertTopContainer(panel);
        PanelContainerUtilities.clearButtonTopContainer(panel);
        PanelContainerUtilities.clearContentContainer(panel);
        PanelContainerUtilities.clearAlertBottomContainer(panel);
        PanelContainerUtilities.clearButtonBottomContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear multiple alerts from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToBottomContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToBottomContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearAlertBottomContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear multiple alerts from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_PANEL_CONTENT = createExpectedAlertTopContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToTopContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToTopContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearAlertTopContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear multiple buttons from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        PanelContainerUtilities.addButtonToBottomContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToBottomContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearButtonBottomContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear multiple buttons from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_PANEL_CONTENT = createExpectedButtonTopContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        PanelContainerUtilities.addButtonToTopContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToTopContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearButtonTopContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should clear multiple content from container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var someContent = ElementFactory.createElementWithId('div', 'some-content');
        var someOtherContent = ElementFactory.createElementWithId('div', 'some-other-content');
        var EXPECTED_PANEL_CONTENT = createExpectedBodyContainerContent(someContent.outerHTML + someOtherContent.outerHTML);
        PanelContainerUtilities.addContentToContainer(panel, someContent);
        PanelContainerUtilities.addContentToContainer(panel, someOtherContent);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);

        PanelContainerUtilities.clearContentContainer(panel);
        expect(panel.outerHTML).to.equal(DEFAULT_PANEL_CONTENT);
    });

    it('should remove specific alert from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_INITIAL_PANEL_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        var EXPECTED_PANEL_CONTENT = createExpectedAlertBottomContainerContent(secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToBottomContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToBottomContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_INITIAL_PANEL_CONTENT);

        PanelContainerUtilities.removeAlertFromBottomContainer(panel, firstAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should remove specific alert from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_INITIAL_PANEL_CONTENT = createExpectedAlertTopContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        var EXPECTED_PANEL_CONTENT = createExpectedAlertTopContainerContent(secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToTopContainer(panel, firstAlert);
        PanelContainerUtilities.addAlertToTopContainer(panel, secondAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_INITIAL_PANEL_CONTENT);

        PanelContainerUtilities.removeAlertFromTopContainer(panel, firstAlert);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should remove specific button from bottom container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_INITIAL_PANEL_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        var EXPECTED_PANEL_CONTENT = createExpectedButtonBottomContainerContent(secondButton.outerHTML);
        PanelContainerUtilities.addButtonToBottomContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToBottomContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_INITIAL_PANEL_CONTENT);

        PanelContainerUtilities.removeButtonFromBottomContainer(panel, firstButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should remove specific button from top container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_INITIAL_PANEL_CONTENT = createExpectedButtonTopContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        var EXPECTED_PANEL_CONTENT = createExpectedButtonTopContainerContent(secondButton.outerHTML);
        PanelContainerUtilities.addButtonToTopContainer(panel, firstButton);
        PanelContainerUtilities.addButtonToTopContainer(panel, secondButton);
        expect(panel.outerHTML).to.equal(EXPECTED_INITIAL_PANEL_CONTENT);

        PanelContainerUtilities.removeButtonFromTopContainer(panel, firstButton);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });

    it('should remove specific content from container', function () {
        var panel = PanelContainerFactory.createPanel('panel-id', 'Panel Title');
        var someContent = ElementFactory.createElementWithId('div', 'some-content');
        var someOtherContent = ElementFactory.createElementWithId('div', 'some-other-content');
        var EXPECTED_INITIAL_PANEL_CONTENT = createExpectedBodyContainerContent(someContent.outerHTML + someOtherContent.outerHTML);
        var EXPECTED_PANEL_CONTENT = createExpectedBodyContainerContent(someOtherContent.outerHTML);
        PanelContainerUtilities.addContentToContainer(panel, someContent);
        PanelContainerUtilities.addContentToContainer(panel, someOtherContent);
        expect(panel.outerHTML).to.equal(EXPECTED_INITIAL_PANEL_CONTENT);

        PanelContainerUtilities.removeContentFromContainer(panel, someContent);
        expect(panel.outerHTML).to.equal(EXPECTED_PANEL_CONTENT);
    });
});