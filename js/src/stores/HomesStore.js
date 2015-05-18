var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');
var filters = require('./../models/FiltersModel.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.homes = [];
        this.count = 0;
        this.loading = false;

        this.bindActions(
            "LOAD_HOMES", this.loadHomes,
            "LOAD_HOMES_SUCCESS", this.loadHomesSuccess
        );
    },
    loadHomes: function () {
        this.loading = true;
        this.emit("change");
    },
    loadHomesSuccess: function (homesData) {
        this.loading = false;
        this.homes = homesData.data;
        this.count = homesData.meta.count;
        this.emit("change");
    },
    getHomes: function () {
        return this.homes
    },
    isLoading: function () {
        return this.loading;
    },
    getCount: function () {
        return this.count
    }
});