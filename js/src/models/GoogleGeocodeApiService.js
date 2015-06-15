var $ = require('jquery-browserify');

module.exports = {
    getCoords: function (address, success) {
        var request;
        request = $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?components=country:uk&address=' + address,
            success: function (response) {
                success(response.results[0].geometry.location.lng, response.results[0].geometry.location.lat);
            }.bind(this)
        });

    }
};