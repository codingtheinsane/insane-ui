var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var ElementFactory = require('../../../../../app/view/panel/utils/element/ElementFactory');
var PanelContainerFactory = require('../../../../../app/view/panel/utils/PanelContainerFactory');
var PanelContainerUtilities = require('../../../../../app/view/panel/utils/PanelContainerUtilities');

describe('Panel Container Utilities', function () {

    jsdom();

    var DEFAULT_CONTAINER_CONTENT = createExpectedPanelContent('', '', '', '', '');

    it('should add alert to bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var alert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(alert.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addAlertToBottomPanel(container, alert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add alert to top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertTopContainerContent(alert.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addAlertToTopPanel(container, alert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add button to bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var button = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(button.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addButtonToBottomPanel(container, button);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add button to top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var button = ElementFactory.createElementWithId('button', 'bottom-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonTopContainerContent(button.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addButtonToTopPanel(container, button);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add content to container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var EXPECTED_CONTAINER_CONTENT = createExpectedBodyContainerContent(content.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addContentToContainer(container, content);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add content to all containers', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var topAlert = ElementFactory.createElementWithId('div', 'top-alert');
        var topButton = ElementFactory.createElementWithId('button', 'top-button');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var bottomAlert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var bottomButton = ElementFactory.createElementWithId('button', 'bottom-button');

        var EXPECTED_CONTAINER_CONTENT = createExpectedPanelContent(
            topAlert.outerHTML, topButton.outerHTML,
            content.outerHTML,
            bottomAlert.outerHTML, bottomButton.outerHTML);

        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addAlertToTopPanel(container, topAlert);
        PanelContainerUtilities.addButtonToTopPanel(container, topButton);
        PanelContainerUtilities.addContentToContainer(container, content);
        PanelContainerUtilities.addAlertToBottomPanel(container, bottomAlert);
        PanelContainerUtilities.addButtonToBottomPanel(container, bottomButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add multiple alerts to bottom container by order', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addAlertToBottomPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToBottomPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add multiple alerts to top container by order', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addAlertToBottomPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToBottomPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add multiple buttons to bottom container by order', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'top-button');
        var secondButton = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addButtonToBottomPanel(container, firstButton);
        PanelContainerUtilities.addButtonToBottomPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });


    it('should add multiple buttons to top container by order', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'top-button');
        var secondButton = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addButtonToBottomPanel(container, firstButton);
        PanelContainerUtilities.addButtonToBottomPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should add multiple content to container by order', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var someContent = ElementFactory.createElementWithId('div', 'some-content');
        var someOtherContent = ElementFactory.createElementWithId('div', 'some-other-content');
        var EXPECTED_CONTAINER_CONTENT = createExpectedBodyContainerContent(someContent.outerHTML + someOtherContent.outerHTML);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);

        PanelContainerUtilities.addContentToContainer(container, someContent);
        PanelContainerUtilities.addContentToContainer(container, someOtherContent);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should clear alert from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(alert.outerHTML);
        PanelContainerUtilities.addAlertToBottomPanel(container, alert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearAlertsFromBottomPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear alert from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var alert = ElementFactory.createElementWithId('div', 'top-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertTopContainerContent(alert.outerHTML);
        PanelContainerUtilities.addAlertToTopPanel(container, alert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearAlertsFromTopPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear button from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var button = ElementFactory.createElementWithId('button', 'top-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(button.outerHTML);
        PanelContainerUtilities.addButtonToBottomPanel(container, button);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearButtonsFromBottomPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear button from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var button = ElementFactory.createElementWithId('button', 'bottom-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonTopContainerContent(button.outerHTML);
        PanelContainerUtilities.addButtonToTopPanel(container, button);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearButtonsFromTopPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear all content from container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var EXPECTED_CONTAINER_CONTENT = createExpectedBodyContainerContent(content.outerHTML);
        PanelContainerUtilities.addContentToContainer(container, content);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearContentFromContainer(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear content from all containers', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var topAlert = ElementFactory.createElementWithId('div', 'top-alert');
        var topButton = ElementFactory.createElementWithId('button', 'top-button');
        var content = ElementFactory.createElementWithId('div', 'some-content');
        var bottomAlert = ElementFactory.createElementWithId('div', 'bottom-alert');
        var bottomButton = ElementFactory.createElementWithId('button', 'bottom-button');

        var EXPECTED_CONTAINER_CONTENT = createExpectedPanelContent(
            topAlert.outerHTML, topButton.outerHTML,
            content.outerHTML,
            bottomAlert.outerHTML, bottomButton.outerHTML);

        PanelContainerUtilities.addAlertToTopPanel(container, topAlert);
        PanelContainerUtilities.addButtonToTopPanel(container, topButton);
        PanelContainerUtilities.addContentToContainer(container, content);
        PanelContainerUtilities.addAlertToBottomPanel(container, bottomAlert);
        PanelContainerUtilities.addButtonToBottomPanel(container, bottomButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearAlertsFromTopPanel(container);
        PanelContainerUtilities.clearButtonsFromTopPanel(container);
        PanelContainerUtilities.clearContentFromContainer(container);
        PanelContainerUtilities.clearAlertsFromBottomPanel(container);
        PanelContainerUtilities.clearButtonsFromBottomPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear multiple alerts from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToBottomPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToBottomPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearAlertsFromBottomPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear multiple alerts from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertTopContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToTopPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToTopPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearAlertsFromTopPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear multiple buttons from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        PanelContainerUtilities.addButtonToBottomPanel(container, firstButton);
        PanelContainerUtilities.addButtonToBottomPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearButtonsFromBottomPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear multiple buttons from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonTopContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        PanelContainerUtilities.addButtonToTopPanel(container, firstButton);
        PanelContainerUtilities.addButtonToTopPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearButtonsFromTopPanel(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should clear multiple content from container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var someContent = ElementFactory.createElementWithId('div', 'some-content');
        var someOtherContent = ElementFactory.createElementWithId('div', 'some-other-content');
        var EXPECTED_CONTAINER_CONTENT = createExpectedBodyContainerContent(someContent.outerHTML + someOtherContent.outerHTML);
        PanelContainerUtilities.addContentToContainer(container, someContent);
        PanelContainerUtilities.addContentToContainer(container, someOtherContent);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);

        PanelContainerUtilities.clearContentFromContainer(container);
        expect(container.outerHTML).to.equal(DEFAULT_CONTAINER_CONTENT);
    });

    it('should remove specific alert from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_INITIAL_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertBottomContainerContent(secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToBottomPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToBottomPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_INITIAL_CONTAINER_CONTENT);

        PanelContainerUtilities.removeAlertFromBottomPanel(container, firstAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should remove specific alert from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstAlert = ElementFactory.createElementWithId('div', 'first-alert');
        var secondAlert = ElementFactory.createElementWithId('div', 'second-alert');
        var EXPECTED_INITIAL_CONTAINER_CONTENT = createExpectedAlertTopContainerContent(firstAlert.outerHTML + secondAlert.outerHTML);
        var EXPECTED_CONTAINER_CONTENT = createExpectedAlertTopContainerContent(secondAlert.outerHTML);
        PanelContainerUtilities.addAlertToTopPanel(container, firstAlert);
        PanelContainerUtilities.addAlertToTopPanel(container, secondAlert);
        expect(container.outerHTML).to.equal(EXPECTED_INITIAL_CONTAINER_CONTENT);

        PanelContainerUtilities.removeAlertFromTopPanel(container, firstAlert);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should remove specific button from bottom container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_INITIAL_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonBottomContainerContent(secondButton.outerHTML);
        PanelContainerUtilities.addButtonToBottomPanel(container, firstButton);
        PanelContainerUtilities.addButtonToBottomPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_INITIAL_CONTAINER_CONTENT);

        PanelContainerUtilities.removeButtonFromBottomPanel(container, firstButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    it('should remove specific button from top container', function () {
        var container = PanelContainerFactory.createContainer('container-id', 'Container Title');
        var firstButton = ElementFactory.createElementWithId('button', 'first-button');
        var secondButton = ElementFactory.createElementWithId('button', 'second-button');
        var EXPECTED_INITIAL_CONTAINER_CONTENT = createExpectedButtonTopContainerContent(firstButton.outerHTML + secondButton.outerHTML);
        var EXPECTED_CONTAINER_CONTENT = createExpectedButtonTopContainerContent(secondButton.outerHTML);
        PanelContainerUtilities.addButtonToTopPanel(container, firstButton);
        PanelContainerUtilities.addButtonToTopPanel(container, secondButton);
        expect(container.outerHTML).to.equal(EXPECTED_INITIAL_CONTAINER_CONTENT);

        PanelContainerUtilities.removeButtonFromTopPanel(container, firstButton);
        expect(container.outerHTML).to.equal(EXPECTED_CONTAINER_CONTENT);
    });

    function createExpectedPanelContent(alertTopContainerInnerHtml, buttonTopContainerInnerHtml,
                                        contentContainerInnerHtml,
                                        alertBottomContainerInnerHtml, buttonBottomContainerInnerHtml) {
        return '<div id="container-id" class="panel panel-default">'
            + '<div id="container-id-heading" class="panel-heading">Container Title</div>'
            + '<div id="container-id-body" class="panel-body">'
            + '<div id="container-id-alert-top-container" class="ui-alert-top-container">'
            + alertTopContainerInnerHtml
            + '</div>'
            + '<div id="container-id-button-top-container" class="ui-button-top-container">'
            + buttonTopContainerInnerHtml
            + '</div>'
            + '<div id="container-id-body-content" class="ui-body-content-container">'
            + contentContainerInnerHtml
            + '</div>'
            + '<div id="container-id-alert-bottom-container" class="ui-alert-bottom-container">'
            + alertBottomContainerInnerHtml
            + '</div>'
            + '<div id="container-id-button-bottom-container" class="ui-button-bottom-container">'
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
});