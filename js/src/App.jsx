var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var actions = require('./actions.js');
var Model = require('./models/HomesModel.js');

var RouteHandler = Router.RouteHandler;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);



var App = React.createClass({
    mixins:[FluxMixin],
    render: function(){

        return (
            <RouteHandler />
        );
    }
});

module.exports = App;