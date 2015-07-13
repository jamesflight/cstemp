var $ = require('jquery-browserify');
var config = require('./../config.js');
var GeocodeService = require('./GoogleGeocodeApiService.js');

module.exports = {
    get: function (filters, success, error) {

        GeocodeService.getCoords(filters.address, function (long, lat) {
            filters.long = long;
            filters.lat = lat;
            $.ajax({
                url: config.API_URL + 'homes',
                data: filters,
                success: function (response) {
                    success(response);
                },
                error: function (response) {
                    error(JSON.parse(response.responseText).errors.validation);
                }
            });
        });
    },
    postShortlist: function (shortlist, filters, success) {
        $.ajax
        ({
            type: "POST",
            //the url where you want to sent the userName and password to
            url: config.API_URL + 'careseekers/shortlist',
            dataType: 'json',
            //json object to sent to the authentication url
            data: {
                meta:{
                    search_location:filters.address,
                    search_care_type:filters.care_type,
                    search_filter_dementia:filters.hasOwnProperty('dementia'),
                    search_filter_learning_disability:filters.hasOwnProperty('learning_disability'),
                    search_filter_under_65:filters.hasOwnProperty('under_65'),
                    search_filter_sensory_impairments:filters.hasOwnProperty('sensory_impairments')
                },
                providers:shortlist},
            success: function (response) {
                success(response.id);
            }
        });
    }
};