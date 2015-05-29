var $ = require('jquery-browserify');
var config = require('./../config.js');
var GeocodeService = require('./GoogleGeocodeApiService.js');

module.exports = {
    get: function (filters, success, error) {
        GeocodeService.getPostcode(filters.address, function (postcode) {
            filters.postcode = postcode;
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
    postShortlist: function (shortlist, postcode, success) {
        $.ajax
        ({
            type: "POST",
            //the url where you want to sent the userName and password to
            url: config.API_URL + 'careseekers/shortlist',
            dataType: 'json',
            //json object to sent to the authentication url
            data: {postcode:postcode,providers:shortlist},
            success: function (response) {
                success(response.id);
            }
        });
    }
};