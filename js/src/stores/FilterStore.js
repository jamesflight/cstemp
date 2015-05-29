var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.filters = {
            address:'',
            care_type:'',
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
    },
    getMainFilters: function () {
        return {
            address:this.filters.address,
            care_type:this.filters.care_type
        }
    },
    getSpecialismFilters: function () {
        var specialisms = [];
        specialisms = this.addSpecialismIfExists('dementia', specialisms);
        specialisms = this.addSpecialismIfExists('mental_health', specialisms);
        specialisms = this.addSpecialismIfExists('learning_disability', specialisms);
        specialisms = this.addSpecialismIfExists('under_65', specialisms);
        specialisms = this.addSpecialismIfExists('sensory_impairment', specialisms);
        return specialisms;
    },
    addSpecialismIfExists: function (prop, array) {
        if (this.filters.hasOwnProperty(prop)) {
            array.push({
                cleanName:prop.charAt(0).toUpperCase() + prop.slice(1).replace(/_/g, " "),
                name:prop
            });
        }

        return array;
    },
    getCost: function () {
        if (this.filters.care_type === 'nursing_home') {
            return 800;
        }

        return 600;
    }
});