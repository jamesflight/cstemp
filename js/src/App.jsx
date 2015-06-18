var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var actions = require('./actions.js');
var Model = require('./models/HomesModel.js');
var $ = require('jquery-browserify');
var RouteHandler = Router.RouteHandler;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ga = require('react-google-analytics');
var GAInitiailizer = ga.Initializer;
var facebookRemarketing = require('./conversionpixels/facebook-remarketing.html');
var adwordsRemarketing = require('./conversionpixels/adwords-remarketing.html');



var App = React.createClass({
    mixins:[FluxMixin],
    componentDidMount:function () {
        ga('create', 'UA-50144493-2', 'auto');
        ga('send', 'pageview', '/home');

        $('body').append(adwordsRemarketing);
        $('body').append(facebookRemarketing);
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