var App = require('./App.jsx');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Home = require('./Home.jsx');
var Homes = require('./components/Homes.jsx');


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="homes" handler={Homes} />
    </Route>
);

module.exports = routes;