var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.filters = {
            radius:10
        };
        this.bindActions(
            "UPDATE_FILTER", this.updateFilter,
            "REMOVE_FILTER", this.removeFilter
        );
    },
    updateFilter: function (payload) {
        this.filters[payload.filter] = payload.value;
        this.emit("change");
    },
    removeFilter: function (name) {
        delete this.filters[name];
        this.emit("change");
    },
    hasFilter: function (name) {
        return this.filters.hasOwnProperty(name);
    },
    getState: function () {
        return this.filters;
    }
});