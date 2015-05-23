var $ = require('jquery-browserify');

module.exports = {
    getPostcode: function (address, success) {
        var request;
        request = $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?components=country:uk&address=' + address,
            success: function (response) {
                $.ajax({
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + response.results[0].geometry.location.lat + ',' + response.results[0].geometry.location.lng,
                    success: function (response) {
                        var postcode = this.getPostcodeFromResponse(response);
                        success(postcode);
                    }.bind(this)
                });
            }.bind(this)
        });

    },
    getPostcodeFromResponse: function (response) {
        var postcode = '';

        $.each(response.results, function (index, address) {
            $.each(address.address_components, function (index, component) {
                $.each(component.types, function (index, type) {
                    if (type === "postal_code") {
                        postcode = component.long_name;
                    }
                })
            });
        });

        return postcode;
    }
};