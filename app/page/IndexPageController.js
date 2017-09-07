var IndexPageView = require('./view/IndexPageView');
var IndexPageModel = require('./model/IndexPageModel');

function run(container) {
    IndexPageView.display(container, IndexPageModel);
}

module.exports = {
    run: run
};