var jsdom = require('mocha-jsdom');
var TimeKeeper = require('../../../../../../app/view/panel/utils/element/TimeKeeper');

describe('Time Keeper', function () {

    jsdom();

    it('should call function on time out', function (done) {
        TimeKeeper.timeOut(function() {
            done();
        }, 0.005);
    });
});