var constants = require('./constants.js');
var HomesModel = require('./models/HomesModel.js');

module.exports = {
    loadHomes: function(filterChange) {
        this.dispatch(constants.LOAD_HOMES, filterChange);

        HomesModel.get(function (homes) {
            this.dispatch(constants.LOAD_HOMES_SUCCESS, homes);
        }.bind(this), function (errors) {
            this.dispatch(constants.LOAD_HOMES_ERROR, {messages: errors});
        }.bind(this));
    }
};