var expect = require('chai').expect;
var Router = require('../../app/Router');
var IndexPagePresenter = require('../../app/content/index/IndexPagePresenter');
var ActionPanelPagePresenter = require('../../app/content/action_panel/ActionPanelPagePresenter');

describe('Router', function () {

    it('should always route empty query to Index Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('?')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('/?/')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('/?')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('any.url')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('any.url?')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('any.url/?/')).to.equal(IndexPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('any.url/?')).to.equal(IndexPagePresenter);
    });

    it('should default routing to Index Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('even with an invalid url')).to.equal(IndexPagePresenter);
    });

    it('should route to Action Panel Page Controller', function () {
        expect(Router.getPageControllerFromCurrentHRef('?/panel/ActionPanel/')).to.equal(ActionPanelPagePresenter);
        expect(Router.getPageControllerFromCurrentHRef('any.url?/panel/ActionPanel/')).to.equal(ActionPanelPagePresenter);
    });
});