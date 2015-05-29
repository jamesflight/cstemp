var constants = require('./constants.js');
var HomesModel = require('./models/HomesModel.js');
var GoogleApiService = require('./models/GoogleGeocodeApiService.js');

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
    },
    addToShortlist: function (id) {
        this.dispatch(constants.ADD_TO_SHORTLIST, id);
    },
    removeFromShortlist: function (id) {
        this.dispatch(constants.REMOVE_FROM_SHORTLIST, id);
    },
    postShortlistToServer: function (shortlist, filters) {
        this.dispatch(constants.POST_SHORTLIST_TO_SERVER);
        HomesModel.postShortlist(shortlist, filters.postcode, function (id) {
            this.dispatch(constants.POST_SHORTLIST_TO_SERVER_SUCCESS, id);
            window.location = 'http://advice.careselector.com/comparison-summary/?id=' + id + '&location=' + filters.address + '&care_type=' + filters.care_type;
        }.bind(this));
    }
};