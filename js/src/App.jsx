var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var actions = require('./actions.js');
var Model = require('./models/HomesModel.js');

var RouteHandler = Router.RouteHandler;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ga = require('react-google-analytics');
var GAInitiailizer = ga.Initializer;



var App = React.createClass({
    mixins:[FluxMixin],
    render: function(){

        return (
            <div>
                <GAInitiailizer />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;