var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.homes = [];
        this.shortlist = [];
        this.errors = [];
        this.count = 0;
        this.loading = false;
        this.isSendingShortlistToServer = false;

        this.bindActions(
            "LOAD_HOMES", this.loadHomes,
            "LOAD_HOMES_SUCCESS", this.loadHomesSuccess,
            "LOAD_HOMES_ERROR", this.loadHomesError,
            "ADD_TO_SHORTLIST", this.addToShortlist,
            "REMOVE_FROM_SHORTLIST", this.removeFromShortlist,
            "POST_SHORTLIST_TO_SERVER", this.onPostShortlistToServer,
            "POST_SHORTLIST_TO_SERVER_SUCCESS", this.onPostShortlistToServerSuccess
        );
    },
    onPostShortlistToServer: function () {
        this.isSendingShortlistToServer = true;
        this.emit("change");
    },
    onPostShortlistToServerSuccess: function (id) {
        this.isSendingShortlistToServer = false;
        this.emit("change");
    },
    loadHomes: function () {
        this.loading = true;
        this.emit("change");
    },
    loadHomesSuccess: function (homesData) {
        this.loading = false;
        $.each(homesData.data, function (index, value) {
            var homeInShortlist = this.shortlist.filter(function (home) {
                return home.id === value.id;
            });

            if (homeInShortlist.length !== 0) {
                value.inShortlist = true;
            } else {
                value.inShortlist = false;
            }
            value.key = index;
            homesData.data[index] = value;
        }.bind(this));

        this.homes = homesData.data;

        this.count = homesData.meta.count;
        this.errors = [];
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
    getShortlist: function () {
        return this.shortlist;
    },
    hasLoadedHomes: function ()
    {
        if (this.homes.length > 0) {
            return true;
        }

        return false;
    },
    addToShortlist: function (id) {
        var home = this.homes.filter(function (home) {
            return home.id === id;
        })[0];

        this.shortlist.push(home);

        this.homes = this.homes.filter(function (home) {
            if (home.id === id) {
                home.inShortlist = true;
            }
            return home;
        });

        this.emit("change");
    },
    removeFromShortlist: function (id) {
        id = parseInt(id);
        this.shortlist = this.shortlist.filter(function (home) {
            return home.id !== id;
        });

        this.homes = this.homes.filter(function (home) {
            if (home.id === id) {
                home.inShortlist = false;
            }

            return home;
        });
        this.emit("change");
    },
    isLoading: function () {
        return this.loading;
    },
    getCount: function () {
        return this.count;
    },
    getIsSendingShortlistToServer: function () {
        return this.isSendingShortlistToServer;
    }
});