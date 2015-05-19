var $ = require('jquery-browserify');
var config = require('./../config.js');

module.exports = {
    get: function (filters, success, error) {
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
    }
};