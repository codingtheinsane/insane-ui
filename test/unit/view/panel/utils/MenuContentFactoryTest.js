var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var MenuContentFactory = require('../../../../../app/view/panel/utils/MenuContentFactory');

describe('Menu Content Factory', function () {

    jsdom();

    function createMenuContent(content) {
        return MenuContentFactory.createMenuContent('ui-menu', 'ui-menu-collapsible-content', content);
    }

    function createExpectedMenuContent(menuInnerHtml) {
        return '<div id="ui-menu-collapsible-content" class="navbar-collapse collapse">'
            + menuInnerHtml
            + '</div>';
    }

    function createExpectedLeftMenuContent(leftMenuInnerHtml) {
        return createExpectedMenuContent('<ul id="ui-menu-content-left" class="nav navbar-nav">'
            + leftMenuInnerHtml
            + '</ul>');
    }

    function createExpectedRightMenuContent(rightMenuInnerHtml) {
        return createExpectedMenuContent('<ul id="ui-menu-content-right" class="nav navbar-nav navbar-right">'
            + rightMenuInnerHtml
            + '</ul>');
    }

    function createExpectedLeftSubMenuContent(leftSubMenuInnerHtml) {
        return createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1-sub-menu" class="dropdown">'
            + '<a id="ui-menu-content-left-menu-1-sub-menu-dropdown-toggle" class="dropdown-toggle" '
            + 'href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
            + 'Menu Item <span id="ui-menu-content-left-menu-1-sub-menu-dropdown-toggle-caret" class="caret"></span></a>'
            + '<ul id="ui-menu-content-left-menu-1-sub-menu-items" class="dropdown-menu">'
            + leftSubMenuInnerHtml
            + '</ul></li>'
        );
    }

    function createExpectedRightSubMenuContent(rightSubMenuInnerHtml) {
        return createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1-sub-menu" class="dropdown">'
            + '<a id="ui-menu-content-right-menu-1-sub-menu-dropdown-toggle" class="dropdown-toggle" '
            + 'href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
            + 'Menu Item <span id="ui-menu-content-right-menu-1-sub-menu-dropdown-toggle-caret" class="caret"></span></a>'
            + '<ul id="ui-menu-content-right-menu-1-sub-menu-items" class="dropdown-menu">'
            + rightSubMenuInnerHtml
            + '</ul></li>'
        );
    }

    it('should create menu with no items', function () {
        var EXPECTED_EMPTY_MENU = createExpectedMenuContent('');
        var menu = createMenuContent({});
        expect(menu.outerHTML).to.equal(EXPECTED_EMPTY_MENU);
    });

    it('should create menu with empty left menu', function () {
        var EXPECTED_EMPTY_LEFT_MENU = createExpectedLeftMenuContent('');
        var menu = createMenuContent({
            'left': []
        });
        expect(menu.outerHTML).to.equal(EXPECTED_EMPTY_LEFT_MENU);
    });

    it('should create menu with left text item', function () {
        var EXPECTED_LEFT_TEXT_MENU_ITEM = createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1"><p id="ui-menu-content-left-menu-1-text" class="navbar-text">Text Item</p></li>'
        );
        var menu = createMenuContent({
            'left': [
                {'type': 'text', 'run': 'Text Item'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_LEFT_TEXT_MENU_ITEM);
    });

    it('should create menu with left active link item', function () {
        var EXPECTED_ACTIVE_LEFT_LINK_MENU_ITEM = createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1" class="active"><a id="ui-menu-content-left-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'left': [
                {'type': 'active_link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_ACTIVE_LEFT_LINK_MENU_ITEM);
    });

    it('should create menu with left link item', function () {
        var EXPECTED_LEFT_LINK_MENU_ITEM = createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1"><a id="ui-menu-content-left-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'left': [
                {'type': 'link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_LEFT_LINK_MENU_ITEM);
    });

    it('should create menu with multiple ordered left items', function () {
        var EXPECTED_LEFT_MULTIPLE_MENU_ITEMS_BY_ORDER = createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1"><p id="ui-menu-content-left-menu-1-text" class="navbar-text">Text Item</p></li>' +
            '<li id="ui-menu-content-left-menu-2"><a id="ui-menu-content-left-menu-2-link" href="?content">Link Item</a></li>'
        );
        var EXPECTED_LEFT_MULTIPLE_MENU_ITEMS_BY_OPPOSITE_ORDER = createExpectedLeftMenuContent(
            '<li id="ui-menu-content-left-menu-1"><a id="ui-menu-content-left-menu-1-link" href="?content">Link Item</a></li>' +
            '<li id="ui-menu-content-left-menu-2"><p id="ui-menu-content-left-menu-2-text" class="navbar-text">Text Item</p></li>'
        );
        var menuWithItemsByOrder = createMenuContent({
            'left': [
                {'type': 'text', 'run': 'Text Item'},
                {'type': 'link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        var menuWithItemsByOppositeOrder = createMenuContent({
            'left': [
                {'type': 'link', 'run': 'Link Item', 'link': '?content'},
                {'type': 'text', 'run': 'Text Item'}
            ]
        });
        expect(menuWithItemsByOrder.outerHTML).to.equal(EXPECTED_LEFT_MULTIPLE_MENU_ITEMS_BY_ORDER);
        expect(menuWithItemsByOppositeOrder.outerHTML).to.equal(EXPECTED_LEFT_MULTIPLE_MENU_ITEMS_BY_OPPOSITE_ORDER);
    });

    it('should create menu with empty left sub menu item', function () {
        var EXPECTED_LEFT_EMPTY_SUB_MENU_ITEM = createExpectedLeftSubMenuContent('');
        var menu = createMenuContent({
            'left': [
                {'type': 'menu', 'run': 'Menu Item', 'children': []}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_LEFT_EMPTY_SUB_MENU_ITEM);
    });

    it('should create menu with left sub menu header item', function () {
        var EXPECTED_LEFT_HEADER_SUB_MENU_ITEM = createExpectedLeftSubMenuContent(
            '<li id="ui-menu-content-left-menu-1-sub-menu-1" class="dropdown-header">Header Item</li>'
        );
        var menu = createMenuContent({
            'left': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'header', 'run': 'Header Item'}
                ]
                }
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_LEFT_HEADER_SUB_MENU_ITEM);
    });

    it('should create menu with left sub menu link item', function () {
        var EXPECTED_LEFT_LINK_SUB_MENU_ITEM = createExpectedLeftSubMenuContent(
            '<li id="ui-menu-content-left-menu-1-sub-menu-1"><a id="ui-menu-content-left-menu-1-sub-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'left': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'}
                ]
                }
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_LEFT_LINK_SUB_MENU_ITEM);
    });

    it('should create menu with multiple ordered left sub menu items', function () {
        var EXPECTED_LEFT_MULTIPLE_SUB_MENU_ITEMS_BY_ORDER = createExpectedLeftSubMenuContent(
            '<li id="ui-menu-content-left-menu-1-sub-menu-1" class="dropdown-header">Header Item</li>'
            + '<li id="ui-menu-content-left-menu-1-sub-menu-2"><a id="ui-menu-content-left-menu-1-sub-menu-2-link" href="?content">Link Item</a></li>'
        );
        var EXPECTED_LEFT_MULTIPLE_SUB_MENU_ITEMS_BY_OPPOSITE_ORDER = createExpectedLeftSubMenuContent(
            '<li id="ui-menu-content-left-menu-1-sub-menu-1"><a id="ui-menu-content-left-menu-1-sub-menu-1-link" href="?content">Link Item</a></li>'
            + '<li id="ui-menu-content-left-menu-1-sub-menu-2" class="dropdown-header">Header Item</li>'
        );
        var menuWithItemsByOrder = createMenuContent({
            'left': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'header', 'run': 'Header Item'},
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'}
                ]
                }
            ]
        });
        var menuWithItemsByOppositeOrder = createMenuContent({
            'left': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'},
                    {'type': 'header', 'run': 'Header Item'}
                ]
                }
            ]
        });
        expect(menuWithItemsByOrder.outerHTML).to.equal(EXPECTED_LEFT_MULTIPLE_SUB_MENU_ITEMS_BY_ORDER);
        expect(menuWithItemsByOppositeOrder.outerHTML).to.equal(EXPECTED_LEFT_MULTIPLE_SUB_MENU_ITEMS_BY_OPPOSITE_ORDER);
    });

    it('should create menu with empty right menu', function () {
        var EXPECTED_EMPTY_RIGHT_MENU = createExpectedRightMenuContent('');
        var menu = createMenuContent({
            'right': []
        });
        expect(menu.outerHTML).to.equal(EXPECTED_EMPTY_RIGHT_MENU);
    });

    it('should create menu with right text item', function () {
        var EXPECTED_RIGHT_TEXT_MENU_ITEM = createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1"><p id="ui-menu-content-right-menu-1-text" class="navbar-text">Text Item</p></li>'
        );
        var menu = createMenuContent({
            'right': [
                {'type': 'text', 'run': 'Text Item'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_RIGHT_TEXT_MENU_ITEM);
    });

    it('should create menu with right active link item', function () {
        var EXPECTED_ACTIVE_RIGHT_LINK_MENU_ITEM = createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1" class="active"><a id="ui-menu-content-right-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'right': [
                {'type': 'active_link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_ACTIVE_RIGHT_LINK_MENU_ITEM);
    });

    it('should create menu with right link item', function () {
        var EXPECTED_RIGHT_LINK_MENU_ITEM = createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1"><a id="ui-menu-content-right-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'right': [
                {'type': 'link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_RIGHT_LINK_MENU_ITEM);
    });

    it('should create menu with multiple ordered right items', function () {
        var EXPECTED_RIGHT_MULTIPLE_MENU_ITEMS_BY_ORDER = createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1"><p id="ui-menu-content-right-menu-1-text" class="navbar-text">Text Item</p></li>' +
            '<li id="ui-menu-content-right-menu-2"><a id="ui-menu-content-right-menu-2-link" href="?content">Link Item</a></li>'
        );
        var EXPECTED_RIGHT_MULTIPLE_MENU_ITEMS_BY_OPPOSITE_ORDER = createExpectedRightMenuContent(
            '<li id="ui-menu-content-right-menu-1"><a id="ui-menu-content-right-menu-1-link" href="?content">Link Item</a></li>' +
            '<li id="ui-menu-content-right-menu-2"><p id="ui-menu-content-right-menu-2-text" class="navbar-text">Text Item</p></li>'
        );
        var menuWithItemsByOrder = createMenuContent({
            'right': [
                {'type': 'text', 'run': 'Text Item'},
                {'type': 'link', 'run': 'Link Item', 'link': '?content'}
            ]
        });
        var menuWithItemsByOppositeOrder = createMenuContent({
            'right': [
                {'type': 'link', 'run': 'Link Item', 'link': '?content'},
                {'type': 'text', 'run': 'Text Item'}
            ]
        });
        expect(menuWithItemsByOrder.outerHTML).to.equal(EXPECTED_RIGHT_MULTIPLE_MENU_ITEMS_BY_ORDER);
        expect(menuWithItemsByOppositeOrder.outerHTML).to.equal(EXPECTED_RIGHT_MULTIPLE_MENU_ITEMS_BY_OPPOSITE_ORDER);
    });

    it('should create menu with empty right sub menu item', function () {
        var EXPECTED_RIGHT_EMPTY_SUB_MENU_ITEM = createExpectedRightSubMenuContent('');
        var menu = createMenuContent({
            'right': [
                {'type': 'menu', 'run': 'Menu Item', 'children': []}
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_RIGHT_EMPTY_SUB_MENU_ITEM);
    });

    it('should create menu with right sub menu header item', function () {
        var EXPECTED_RIGHT_HEADER_SUB_MENU_ITEM = createExpectedRightSubMenuContent(
            '<li id="ui-menu-content-right-menu-1-sub-menu-1" class="dropdown-header">Header Item</li>'
        );
        var menu = createMenuContent({
            'right': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'header', 'run': 'Header Item'}
                ]
                }
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_RIGHT_HEADER_SUB_MENU_ITEM);
    });

    it('should create menu with right sub menu link item', function () {
        var EXPECTED_RIGHT_LINK_SUB_MENU_ITEM = createExpectedRightSubMenuContent(
            '<li id="ui-menu-content-right-menu-1-sub-menu-1"><a id="ui-menu-content-right-menu-1-sub-menu-1-link" href="?content">Link Item</a></li>'
        );
        var menu = createMenuContent({
            'right': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'}
                ]
                }
            ]
        });
        expect(menu.outerHTML).to.equal(EXPECTED_RIGHT_LINK_SUB_MENU_ITEM);
    });

    it('should create menu with multiple ordered right sub menu items', function () {
        var EXPECTED_RIGHT_MULTIPLE_SUB_MENU_ITEMS_BY_ORDER = createExpectedRightSubMenuContent(
            '<li id="ui-menu-content-right-menu-1-sub-menu-1" class="dropdown-header">Header Item</li>'
            + '<li id="ui-menu-content-right-menu-1-sub-menu-2"><a id="ui-menu-content-right-menu-1-sub-menu-2-link" href="?content">Link Item</a></li>'
        );
        var EXPECTED_RIGHT_MULTIPLE_SUB_MENU_ITEMS_BY_OPPOSITE_ORDER = createExpectedRightSubMenuContent(
            '<li id="ui-menu-content-right-menu-1-sub-menu-1"><a id="ui-menu-content-right-menu-1-sub-menu-1-link" href="?content">Link Item</a></li>'
            + '<li id="ui-menu-content-right-menu-1-sub-menu-2" class="dropdown-header">Header Item</li>'
        );
        var menuWithItemsByOrder = createMenuContent({
            'right': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'header', 'run': 'Header Item'},
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'}
                ]
                }
            ]
        });
        var menuWithItemsByOppositeOrder = createMenuContent({
            'right': [
                {
                    'type': 'menu', 'run': 'Menu Item', 'children': [
                    {'type': 'link', 'run': 'Link Item', 'link': '?content'},
                    {'type': 'header', 'run': 'Header Item'}
                ]
                }
            ]
        });
        expect(menuWithItemsByOrder.outerHTML).to.equal(EXPECTED_RIGHT_MULTIPLE_SUB_MENU_ITEMS_BY_ORDER);
        expect(menuWithItemsByOppositeOrder.outerHTML).to.equal(EXPECTED_RIGHT_MULTIPLE_SUB_MENU_ITEMS_BY_OPPOSITE_ORDER);
    });

    it('should create menu with ordered left and right items', function () {
        var EXPECTED_MENU = createExpectedMenuContent(
            '<ul id="ui-menu-content-left" class="nav navbar-nav">' +
            '<li id="ui-menu-content-left-menu-1"><p id="ui-menu-content-left-menu-1-text" class="navbar-text">Left Text Item</p></li>' +
            '</ul>' +
            '<ul id="ui-menu-content-right" class="nav navbar-nav navbar-right">' +
            '<li id="ui-menu-content-right-menu-1"><p id="ui-menu-content-right-menu-1-text" class="navbar-text">Right Text Item</p></li>' +
            '</ul>');
        var menuWithLeftMenuDefinedFirst = createMenuContent({
            'left': [
                {'type': 'text', 'run': 'Left Text Item'}
            ],
            'right': [
                {'type': 'text', 'run': 'Right Text Item'}
            ]
        });
        var menuWithRightMenuDefinedFirst = createMenuContent({
            'right': [
                {'type': 'text', 'run': 'Right Text Item'}
            ],
            'left': [
                {'type': 'text', 'run': 'Left Text Item'}
            ]
        });
        expect(menuWithLeftMenuDefinedFirst.outerHTML).to.equal(EXPECTED_MENU);
        expect(menuWithRightMenuDefinedFirst.outerHTML).to.equal(EXPECTED_MENU);
    });
});