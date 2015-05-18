var constants = require('./constants.js');
var HomesModel = require('./models/HomesModel.js');

module.exports = {
    loadHomes: function(filters) {
        this.dispatch(constants.LOAD_HOMES);

        HomesModel.get(filters, function (homes) {
            this.dispatch(constants.LOAD_HOMES_SUCCESS, homes);
        }.bind(this), function (errors) {
            this.dispatch(constants.LOAD_HOMES_ERROR, {messages: errors});
        }.bind(this));
    },
    updateFilter: function (payload) {
        this.dispatch(constants.UPDATE_FILTER, payload);
    }
};