var expect = require('chai').expect;
var Router = require('../../app/Router');
var IndexPageController = require('../../app/page/IndexPageController');
var ActionPanelPageController = require('../../app/page/ActionPanelPageController');

describe('Router', function () {

    it('should always route empty query to Index Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('?')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('/?/')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('/?')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('any.url')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('any.url?')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('any.url/?/')).to.equal(IndexPageController);
        expect(Router.getPageControllerFromCurrentHRef('any.url/?')).to.equal(IndexPageController);
    });

    it('should default routing to Index Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('even with an invalid url')).to.equal(IndexPageController);
    });

    it('should route to Action Panel Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('?/panel/ActionPanel')).to.equal(ActionPanelPageController);
        expect(Router.getPageControllerFromCurrentHRef('any.url?/panel/ActionPanel')).to.equal(ActionPanelPageController);
    });
});