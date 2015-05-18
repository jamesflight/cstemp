var App = require('./App.jsx');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Home = require('./pages/Home.jsx');
var Homes = require('./components/Homes.jsx');
var SelectFilters = require('./pages/SelectFilters.jsx');
var Compare = require('./pages/Compare.jsx');


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="homes" handler={Homes} />
        <Route name="select-filters" handler={SelectFilters} />
        <Route name="compare" handler={Compare} />
    </Route>
);

module.exports = routes;