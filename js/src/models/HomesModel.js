var $ = require('jquery-browserify');
var config = require('./../config.js');

var filters = require('./FiltersModel.js');

module.exports = {
    get: function (success, error) {
        var newFilters = {};
        $.each(filters, function (key, value) {
            if (value !== false) {
                newFilters[key] = value;
            }
        });

        $.ajax({
            url: config.API_URL + 'homes',
            data: newFilters,
            success: function (response) {
                success(response);
            },
            error: function (response) {
                error(response);
            }
        });
    }
};