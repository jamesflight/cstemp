var App = require('./App.jsx');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Home = require('./pages/Home.jsx');
var Homes = require('./components/Homes.jsx');
var SelectFilters = require('./pages/SelectFilters.jsx');
var Compare = require('./pages/Compare.jsx');
var SubmitEmail = require('./pages/SubmitEmail.jsx');
var CompareSearch = require('./pages/CompareSearch.jsx');
var ThankYou = require('./pages/ThankYou.jsx');


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="home" path="/home/:care_type_name/:care_type/:area" handler={Home} />
        <Route name="select-filters" handler={SelectFilters} />
        <Route name="compare" path="/compare" handler={Compare} />
        <Route name="compare-search" path="/compare-search/:location/:care_type/:dementia" handler={CompareSearch} />
        <Route name="email" handler={SubmitEmail} />
        <Route name="thank-you" handler={ThankYou} />
    </Route>
);

module.exports = routes;