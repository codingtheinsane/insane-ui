var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var GlyphIconFactory = require('../../../../../../app/view/panel/utils/element/GlyphIconFactory');

describe('Glyph Icon Factory', function () {

    jsdom();

    it('should create adjust glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ADJUST();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-adjust"></span>');
    });

    it('should create alert glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ALERT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-alert"></span>');
    });

    it('should create align_center glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ALIGN_CENTER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-align-center"></span>');
    });

    it('should create align_justify glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ALIGN_JUSTIFY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-align-justify"></span>');
    });

    it('should create align_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ALIGN_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-align-left"></span>');
    });

    it('should create align_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ALIGN_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-align-right"></span>');
    });

    it('should create apple glyph icon', function () {
        var glyphIcon = GlyphIconFactory.APPLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-apple"></span>');
    });

    it('should create arrow_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ARROW_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-arrow-down"></span>');
    });

    it('should create arrow_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ARROW_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-arrow-left"></span>');
    });

    it('should create arrow_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ARROW_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-arrow-right"></span>');
    });

    it('should create arrow_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ARROW_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-arrow-up"></span>');
    });

    it('should create asterisk glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ASTERISK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-asterisk"></span>');
    });

    it('should create baby_formula glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BABY_FORMULA();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-baby-formula"></span>');
    });

    it('should create backward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BACKWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-backward"></span>');
    });

    it('should create ban_circle glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BAN_CIRCLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ban-circle"></span>');
    });

    it('should create barcode glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BARCODE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-barcode"></span>');
    });

    it('should create bed glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bed"></span>');
    });

    it('should create bell glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BELL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bell"></span>');
    });

    it('should create bishop glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BISHOP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bishop"></span>');
    });

    it('should create bitcoin glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BITCOIN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bitcoin"></span>');
    });

    it('should create blackboard glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BLACKBOARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-blackboard"></span>');
    });

    it('should create bold glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BOLD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bold"></span>');
    });

    it('should create book glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BOOK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-book"></span>');
    });

    it('should create bookmark glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BOOKMARK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bookmark"></span>');
    });

    it('should create briefcase glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BRIEFCASE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-briefcase"></span>');
    });

    it('should create bullhorn glyph icon', function () {
        var glyphIcon = GlyphIconFactory.BULLHORN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-bullhorn"></span>');
    });

    it('should create calendar glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CALENDAR();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-calendar"></span>');
    });

    it('should create camera glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CAMERA();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-camera"></span>');
    });

    it('should create cd glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cd"></span>');
    });

    it('should create certificate glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CERTIFICATE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-certificate"></span>');
    });

    it('should create check glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CHECK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-check"></span>');
    });

    it('should create chevron_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CHEVRON_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-chevron-down"></span>');
    });

    it('should create chevron_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CHEVRON_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-chevron-left"></span>');
    });

    it('should create chevron_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CHEVRON_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-chevron-right"></span>');
    });

    it('should create chevron_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CHEVRON_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-chevron-up"></span>');
    });

    it('should create circle_arrow_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CIRCLE_ARROW_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-circle-arrow-down"></span>');
    });

    it('should create circle_arrow_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CIRCLE_ARROW_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-circle-arrow-left"></span>');
    });

    it('should create circle_arrow_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CIRCLE_ARROW_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-circle-arrow-right"></span>');
    });

    it('should create circle_arrow_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CIRCLE_ARROW_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-circle-arrow-up"></span>');
    });

    it('should create cloud_download glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CLOUD_DOWNLOAD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cloud-download"></span>');
    });

    it('should create cloud_upload glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CLOUD_UPLOAD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cloud-upload"></span>');
    });

    it('should create cloud glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CLOUD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cloud"></span>');
    });

    it('should create cog glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COG();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cog"></span>');
    });

    it('should create collapse_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COLLAPSE_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-collapse-down"></span>');
    });

    it('should create collapse_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COLLAPSE_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-collapse-up"></span>');
    });

    it('should create comment glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COMMENT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-comment"></span>');
    });

    it('should create compressed glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COMPRESSED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-compressed"></span>');
    });

    it('should create copy glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COPY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-copy"></span>');
    });

    it('should create copyright_mark glyph icon', function () {
        var glyphIcon = GlyphIconFactory.COPYRIGHT_MARK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-copyright-mark"></span>');
    });

    it('should create credit_card glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CREDIT_CARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-credit-card"></span>');
    });

    it('should create cutlery glyph icon', function () {
        var glyphIcon = GlyphIconFactory.CUTLERY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-cutlery"></span>');
    });

    it('should create dashboard glyph icon', function () {
        var glyphIcon = GlyphIconFactory.DASHBOARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-dashboard"></span>');
    });

    it('should create download_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.DOWNLOAD_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-download-alt"></span>');
    });

    it('should create download glyph icon', function () {
        var glyphIcon = GlyphIconFactory.DOWNLOAD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-download"></span>');
    });

    it('should create duplicate glyph icon', function () {
        var glyphIcon = GlyphIconFactory.DUPLICATE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-duplicate"></span>');
    });

    it('should create earphone glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EARPHONE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-earphone"></span>');
    });

    it('should create edit glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EDIT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-edit"></span>');
    });

    it('should create education glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EDUCATION();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-education"></span>');
    });

    it('should create eject glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EJECT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-eject"></span>');
    });

    it('should create envelope glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ENVELOPE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-envelope"></span>');
    });

    it('should create equalizer glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EQUALIZER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-equalizer"></span>');
    });

    it('should create erase glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ERASE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-erase"></span>');
    });

    it('should create euro glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EURO();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-euro"></span>');
    });

    it('should create exclamation_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EXCLAMATION_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-exclamation-sign"></span>');
    });

    it('should create expand glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EXPAND();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-expand"></span>');
    });

    it('should create export glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EXPORT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-export"></span>');
    });

    it('should create eye_close glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EYE_CLOSE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-eye-close"></span>');
    });

    it('should create eye_open glyph icon', function () {
        var glyphIcon = GlyphIconFactory.EYE_OPEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-eye-open"></span>');
    });

    it('should create facetime_video glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FACETIME_VIDEO();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-facetime-video"></span>');
    });

    it('should create fast_backward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FAST_BACKWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-fast-backward"></span>');
    });

    it('should create fast_forward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FAST_FORWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-fast-forward"></span>');
    });

    it('should create file glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FILE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-file"></span>');
    });

    it('should create film glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FILM();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-film"></span>');
    });

    it('should create filter glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FILTER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-filter"></span>');
    });

    it('should create fire glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FIRE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-fire"></span>');
    });

    it('should create flag glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLAG();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-flag"></span>');
    });

    it('should create flash glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLASH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-flash"></span>');
    });

    it('should create floppy_disk glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLOPPY_DISK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-floppy-disk"></span>');
    });

    it('should create floppy_open glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLOPPY_OPEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-floppy-open"></span>');
    });

    it('should create floppy_remove glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLOPPY_REMOVE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-floppy-remove"></span>');
    });

    it('should create floppy_save glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLOPPY_SAVE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-floppy-save"></span>');
    });

    it('should create floppy_saved glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FLOPPY_SAVED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-floppy-saved"></span>');
    });

    it('should create folder_close glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FOLDER_CLOSE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-folder-close"></span>');
    });

    it('should create folder_open glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FOLDER_OPEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-folder-open"></span>');
    });

    it('should create font glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FONT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-font"></span>');
    });

    it('should create forward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FORWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-forward"></span>');
    });

    it('should create fullscreen glyph icon', function () {
        var glyphIcon = GlyphIconFactory.FULLSCREEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-fullscreen"></span>');
    });

    it('should create gbp glyph icon', function () {
        var glyphIcon = GlyphIconFactory.GBP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-gbp"></span>');
    });

    it('should create gift glyph icon', function () {
        var glyphIcon = GlyphIconFactory.GIFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-gift"></span>');
    });

    it('should create glass glyph icon', function () {
        var glyphIcon = GlyphIconFactory.GLASS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-glass"></span>');
    });

    it('should create globe glyph icon', function () {
        var glyphIcon = GlyphIconFactory.GLOBE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-globe"></span>');
    });

    it('should create grain glyph icon', function () {
        var glyphIcon = GlyphIconFactory.GRAIN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-grain"></span>');
    });

    it('should create hand_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HAND_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hand-down"></span>');
    });

    it('should create hand_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HAND_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hand-left"></span>');
    });

    it('should create hand_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HAND_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hand-right"></span>');
    });

    it('should create hand_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HAND_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hand-up"></span>');
    });

    it('should create hd_video glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HD_VIDEO();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hd-video"></span>');
    });

    it('should create hdd glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HDD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hdd"></span>');
    });

    it('should create header glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HEADER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-header"></span>');
    });

    it('should create headphones glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HEADPHONES();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-headphones"></span>');
    });

    it('should create heart_empty glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HEART_EMPTY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-heart-empty"></span>');
    });

    it('should create heart glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HEART();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-heart"></span>');
    });

    it('should create home glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HOME();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-home"></span>');
    });

    it('should create hourglass glyph icon', function () {
        var glyphIcon = GlyphIconFactory.HOURGLASS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-hourglass"></span>');
    });

    it('should create ice_lolly_tasted glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ICE_LOLLY_TASTED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ice-lolly-tasted"></span>');
    });

    it('should create ice_lolly glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ICE_LOLLY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ice-lolly"></span>');
    });

    it('should create import glyph icon', function () {
        var glyphIcon = GlyphIconFactory.IMPORT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-import"></span>');
    });

    it('should create inbox glyph icon', function () {
        var glyphIcon = GlyphIconFactory.INBOX();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-inbox"></span>');
    });

    it('should create indent_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.INDENT_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-indent-left"></span>');
    });

    it('should create indent_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.INDENT_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-indent-right"></span>');
    });

    it('should create info_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.INFO_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-info-sign"></span>');
    });

    it('should create italic glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ITALIC();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-italic"></span>');
    });

    it('should create king glyph icon', function () {
        var glyphIcon = GlyphIconFactory.KING();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-king"></span>');
    });

    it('should create knight glyph icon', function () {
        var glyphIcon = GlyphIconFactory.KNIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-knight"></span>');
    });

    it('should create lamp glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LAMP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-lamp"></span>');
    });

    it('should create leaf glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LEAF();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-leaf"></span>');
    });

    it('should create level_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LEVEL_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-level-up"></span>');
    });

    it('should create link glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LINK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-link"></span>');
    });

    it('should create list_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LIST_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-list-alt"></span>');
    });

    it('should create list glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LIST();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-list"></span>');
    });

    it('should create lock glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LOCK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-lock"></span>');
    });

    it('should create log_in glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LOG_IN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-log-in"></span>');
    });

    it('should create log_out glyph icon', function () {
        var glyphIcon = GlyphIconFactory.LOG_OUT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-log-out"></span>');
    });

    it('should create magnet glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MAGNET();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-magnet"></span>');
    });

    it('should create map_marker glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MAP_MARKER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-map-marker"></span>');
    });

    it('should create menu_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MENU_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-menu-down"></span>');
    });

    it('should create menu_hamburger glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MENU_HAMBURGER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-menu-hamburger"></span>');
    });

    it('should create menu_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MENU_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-menu-left"></span>');
    });

    it('should create menu_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MENU_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-menu-right"></span>');
    });

    it('should create menu_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MENU_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-menu-up"></span>');
    });

    it('should create minus_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MINUS_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-minus-sign"></span>');
    });

    it('should create minus glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MINUS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-minus"></span>');
    });

    it('should create modal_window glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MODAL_WINDOW();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-modal-window"></span>');
    });

    it('should create move glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MOVE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-move"></span>');
    });

    it('should create music glyph icon', function () {
        var glyphIcon = GlyphIconFactory.MUSIC();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-music"></span>');
    });

    it('should create new_window glyph icon', function () {
        var glyphIcon = GlyphIconFactory.NEW_WINDOW();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-new-window"></span>');
    });

    it('should create object_align_bottom glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_BOTTOM();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-bottom"></span>');
    });

    it('should create object_align_horizontal glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_HORIZONTAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-horizontal"></span>');
    });

    it('should create object_align_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-left"></span>');
    });

    it('should create object_align_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-right"></span>');
    });

    it('should create object_align_top glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_TOP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-top"></span>');
    });

    it('should create object_align_vertical glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OBJECT_ALIGN_VERTICAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-object-align-vertical"></span>');
    });

    it('should create off glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OFF();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-off"></span>');
    });

    it('should create oil glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OIL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-oil"></span>');
    });

    it('should create ok_circle glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OK_CIRCLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ok-circle"></span>');
    });

    it('should create ok_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OK_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ok-sign"></span>');
    });

    it('should create ok glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ok"></span>');
    });

    it('should create open_file glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OPEN_FILE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-open-file"></span>');
    });

    it('should create open glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OPEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-open"></span>');
    });

    it('should create option_horizontal glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OPTION_HORIZONTAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-option-horizontal"></span>');
    });

    it('should create option_vertical glyph icon', function () {
        var glyphIcon = GlyphIconFactory.OPTION_VERTICAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-option-vertical"></span>');
    });

    it('should create paperclip glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PAPERCLIP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-paperclip"></span>');
    });

    it('should create paste glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PASTE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-paste"></span>');
    });

    it('should create pause glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PAUSE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-pause"></span>');
    });

    it('should create pawn glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PAWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-pawn"></span>');
    });

    it('should create pencil glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PENCIL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-pencil"></span>');
    });

    it('should create phone_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PHONE_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-phone-alt"></span>');
    });

    it('should create phone glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PHONE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-phone"></span>');
    });

    it('should create picture glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PICTURE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-picture"></span>');
    });

    it('should create piggy_bank glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PIGGY_BANK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-piggy-bank"></span>');
    });

    it('should create plane glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PLANE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-plane"></span>');
    });

    it('should create play_circle glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PLAY_CIRCLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-play-circle"></span>');
    });

    it('should create play glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PLAY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-play"></span>');
    });

    it('should create plus_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PLUS_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-plus-sign"></span>');
    });

    it('should create plus glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PLUS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-plus"></span>');
    });

    it('should create print glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PRINT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-print"></span>');
    });

    it('should create pushpin glyph icon', function () {
        var glyphIcon = GlyphIconFactory.PUSHPIN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-pushpin"></span>');
    });

    it('should create qrcode glyph icon', function () {
        var glyphIcon = GlyphIconFactory.QRCODE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-qrcode"></span>');
    });

    it('should create queen glyph icon', function () {
        var glyphIcon = GlyphIconFactory.QUEEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-queen"></span>');
    });

    it('should create question_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.QUESTION_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-question-sign"></span>');
    });

    it('should create random glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RANDOM();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-random"></span>');
    });

    it('should create record glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RECORD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-record"></span>');
    });

    it('should create refresh glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REFRESH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-refresh"></span>');
    });

    it('should create registration_mark glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REGISTRATION_MARK();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-registration-mark"></span>');
    });

    it('should create remove_circle glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REMOVE_CIRCLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-remove-circle"></span>');
    });

    it('should create remove_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REMOVE_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-remove-sign"></span>');
    });

    it('should create remove glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REMOVE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-remove"></span>');
    });

    it('should create repeat glyph icon', function () {
        var glyphIcon = GlyphIconFactory.REPEAT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-repeat"></span>');
    });

    it('should create resize_full glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RESIZE_FULL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-resize-full"></span>');
    });

    it('should create resize_horizontal glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RESIZE_HORIZONTAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-resize-horizontal"></span>');
    });

    it('should create resize_small glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RESIZE_SMALL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-resize-small"></span>');
    });

    it('should create resize_vertical glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RESIZE_VERTICAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-resize-vertical"></span>');
    });

    it('should create retweet glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RETWEET();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-retweet"></span>');
    });

    it('should create road glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ROAD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-road"></span>');
    });

    it('should create ruble glyph icon', function () {
        var glyphIcon = GlyphIconFactory.RUBLE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-ruble"></span>');
    });

    it('should create save_file glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SAVE_FILE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-save-file"></span>');
    });

    it('should create save glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SAVE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-save"></span>');
    });

    it('should create saved glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SAVED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-saved"></span>');
    });

    it('should create scale glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SCALE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-scale"></span>');
    });

    it('should create scissors glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SCISSORS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-scissors"></span>');
    });

    it('should create screenshot glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SCREENSHOT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-screenshot"></span>');
    });

    it('should create sd_video glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SD_VIDEO();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sd-video"></span>');
    });

    it('should create search glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SEARCH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-search"></span>');
    });

    it('should create send glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SEND();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-send"></span>');
    });

    it('should create share_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SHARE_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-share-alt"></span>');
    });

    it('should create share glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SHARE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-share"></span>');
    });

    it('should create shopping_cart glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SHOPPING_CART();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-shopping-cart"></span>');
    });

    it('should create signal glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SIGNAL();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-signal"></span>');
    });

    it('should create sort_by_alphabet_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ALPHABET_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-alphabet-alt"></span>');
    });

    it('should create sort_by_alphabet glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ALPHABET();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-alphabet"></span>');
    });

    it('should create sort_by_attributes_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ATTRIBUTES_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>');
    });

    it('should create sort_by_attributes glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ATTRIBUTES();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-attributes"></span>');
    });

    it('should create sort_by_order_alt glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ORDER_ALT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-order-alt"></span>');
    });

    it('should create sort_by_order glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT_BY_ORDER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort-by-order"></span>');
    });

    it('should create sort glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SORT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sort"></span>');
    });

    it('should create sound_5_1 glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SOUND_5_1();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sound-5-1"></span>');
    });

    it('should create sound_6_1 glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SOUND_6_1();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sound-6-1"></span>');
    });

    it('should create sound_7_1 glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SOUND_7_1();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sound-7-1"></span>');
    });

    it('should create sound_dolby glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SOUND_DOLBY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sound-dolby"></span>');
    });

    it('should create sound_stereo glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SOUND_STEREO();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sound-stereo"></span>');
    });

    it('should create star_empty glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STAR_EMPTY();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-star-empty"></span>');
    });

    it('should create star glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STAR();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-star"></span>');
    });

    it('should create stats glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STATS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-stats"></span>');
    });

    it('should create step_backward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STEP_BACKWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-step-backward"></span>');
    });

    it('should create step_forward glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STEP_FORWARD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-step-forward"></span>');
    });

    it('should create stop glyph icon', function () {
        var glyphIcon = GlyphIconFactory.STOP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-stop"></span>');
    });

    it('should create subscript glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SUBSCRIPT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-subscript"></span>');
    });

    it('should create subtitles glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SUBTITLES();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-subtitles"></span>');
    });

    it('should create sunglasses glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SUNGLASSES();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-sunglasses"></span>');
    });

    it('should create superscript glyph icon', function () {
        var glyphIcon = GlyphIconFactory.SUPERSCRIPT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-superscript"></span>');
    });

    it('should create tag glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TAG();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tag"></span>');
    });

    it('should create tags glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TAGS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tags"></span>');
    });

    it('should create tasks glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TASKS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tasks"></span>');
    });

    it('should create tent glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TENT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tent"></span>');
    });

    it('should create text_background glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TEXT_BACKGROUND();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-text-background"></span>');
    });

    it('should create text_color glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TEXT_COLOR();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-text-color"></span>');
    });

    it('should create text_height glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TEXT_HEIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-text-height"></span>');
    });

    it('should create text_size glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TEXT_SIZE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-text-size"></span>');
    });

    it('should create text_width glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TEXT_WIDTH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-text-width"></span>');
    });

    it('should create th_large glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TH_LARGE();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-th-large"></span>');
    });

    it('should create th_list glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TH_LIST();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-th-list"></span>');
    });

    it('should create th glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-th"></span>');
    });

    it('should create thumbs_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.THUMBS_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-thumbs-down"></span>');
    });

    it('should create thumbs_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.THUMBS_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-thumbs-up"></span>');
    });

    it('should create time glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TIME();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-time"></span>');
    });

    it('should create tint glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TINT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tint"></span>');
    });

    it('should create tower glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TOWER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tower"></span>');
    });

    it('should create transfer glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRANSFER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-transfer"></span>');
    });

    it('should create trash glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRASH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-trash"></span>');
    });

    it('should create tree_conifer glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TREE_CONIFER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tree-conifer"></span>');
    });

    it('should create tree_deciduous glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TREE_DECIDUOUS();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-tree-deciduous"></span>');
    });

    it('should create triangle_bottom glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRIANGLE_BOTTOM();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-triangle-bottom"></span>');
    });

    it('should create triangle_left glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRIANGLE_LEFT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-triangle-left"></span>');
    });

    it('should create triangle_right glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRIANGLE_RIGHT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-triangle-right"></span>');
    });

    it('should create triangle_top glyph icon', function () {
        var glyphIcon = GlyphIconFactory.TRIANGLE_TOP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-triangle-top"></span>');
    });

    it('should create unchecked glyph icon', function () {
        var glyphIcon = GlyphIconFactory.UNCHECKED();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-unchecked"></span>');
    });

    it('should create upload glyph icon', function () {
        var glyphIcon = GlyphIconFactory.UPLOAD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-upload"></span>');
    });

    it('should create usd glyph icon', function () {
        var glyphIcon = GlyphIconFactory.USD();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-usd"></span>');
    });

    it('should create user glyph icon', function () {
        var glyphIcon = GlyphIconFactory.USER();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-user"></span>');
    });

    it('should create volume_down glyph icon', function () {
        var glyphIcon = GlyphIconFactory.VOLUME_DOWN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-volume-down"></span>');
    });

    it('should create volume_off glyph icon', function () {
        var glyphIcon = GlyphIconFactory.VOLUME_OFF();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-volume-off"></span>');
    });

    it('should create volume_up glyph icon', function () {
        var glyphIcon = GlyphIconFactory.VOLUME_UP();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-volume-up"></span>');
    });

    it('should create warning_sign glyph icon', function () {
        var glyphIcon = GlyphIconFactory.WARNING_SIGN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-warning-sign"></span>');
    });

    it('should create wrench glyph icon', function () {
        var glyphIcon = GlyphIconFactory.WRENCH();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-wrench"></span>');
    });

    it('should create yen glyph icon', function () {
        var glyphIcon = GlyphIconFactory.YEN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-yen"></span>');
    });

    it('should create zoom_in glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ZOOM_IN();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-zoom-in"></span>');
    });

    it('should create zoom_out glyph icon', function () {
        var glyphIcon = GlyphIconFactory.ZOOM_OUT();
        expect(glyphIcon.outerHTML).to.equal('<span class="glyphicon glyphicon-zoom-out"></span>');
    });
});