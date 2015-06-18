var $ = require('jquery-browserify');
var config = require('./../config.js');

module.exports = {
   updateEmail: function (id, email, success) {
       $.ajax
       ({
           type: "PUT",
           //the url where you want to sent the userName and password to
           url: config.API_URL + 'careseekers/' + id,
           dataType: 'json',
           //json object to sent to the authentication url
           data: {
               email: email
           },
           success: function (response) {
               success();
           }
       });
   }
};