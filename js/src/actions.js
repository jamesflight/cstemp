var constants = require('./constants.js');
var HomesModel = require('./models/HomesModel.js');

module.exports = {
    loadHomes: function(filters, success) {
        this.dispatch(constants.LOAD_HOMES);

        HomesModel.get(filters, function (homes) {
            this.dispatch(constants.LOAD_HOMES_SUCCESS, homes);
            success();
        }.bind(this), function (errors) {
            this.dispatch(constants.LOAD_HOMES_ERROR, errors);
        }.bind(this));
    },
    updateFilter: function (payload) {
        this.dispatch(constants.UPDATE_FILTER, payload);
    },
    removeFilter: function (name) {
        this.dispatch(constants.REMOVE_FILTER, name);
    }
};