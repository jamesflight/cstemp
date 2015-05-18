var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.filters = {
            radius:10
        };
        this.bindActions(
            "UPDATE_FILTER", this.updateFilter
        );
    },
    updateFilter: function (payload) {
        this.filters[payload.filter] = payload.value;
    },
    getState: function () {
        return this.filters;
    }
});