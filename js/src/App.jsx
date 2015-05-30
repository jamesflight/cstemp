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
    componentDidMount:function () {
        ga('create', 'UA-50144493-2', 'auto');
        ga('send', 'pageview', '/home');
    },
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