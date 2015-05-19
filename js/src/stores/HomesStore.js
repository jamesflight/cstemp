var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.homes = [];
        this.errors = [];
        this.count = 0;
        this.loading = false;

        this.bindActions(
            "LOAD_HOMES", this.loadHomes,
            "LOAD_HOMES_SUCCESS", this.loadHomesSuccess,
            "LOAD_HOMES_ERROR", this.loadHomesError
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
    loadHomesError: function (errors) {
        this.errors = errors;
        this.loading = false;
        this.emit("change");
    },
    getHomes: function () {
        return this.homes;
    },
    getErrors: function () {
        return this.errors;
    },
    hasLoadedHomes: function ()
    {
        if (this.homes.length > 0) {
            return true;
        }

        return false;
    },
    isLoading: function () {
        return this.loading;
    },
    getCount: function () {
        return this.count;
    }
});