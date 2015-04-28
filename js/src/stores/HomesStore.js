var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');
var filters = require('./../models/FiltersModel.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.filters = filters;
        this.homes = [];
        this.loading = false;

        this.bindActions(
            "LOAD_HOMES", this.loadHomes,
            "LOAD_HOMES_SUCCESS", this.loadHomesSuccess
        );
    },
    loadHomes: function (filterChange) {
        this.loading = true;
        filters[filterChange.filter] = filterChange.value;
        this.filters = filters;
        this.emit("change");
    },
    loadHomesSuccess: function (homes) {
        this.loading = false;
        this.homes = homes;
        this.emit("change");
    },
    getFilters: function () {
        return this.filters;
    },
    getHomes: function () {
        return this.homes
    },
    isLoading: function () {
        return this.loading;
    }
});