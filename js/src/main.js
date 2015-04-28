var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App.jsx');
var routes = require('./routes.jsx');
var actions = require('./actions.js');
var Fluxxor = require("fluxxor");
var HomesStore = require('./stores/HomesStore.js');

var stores = {
    HomesStore: new HomesStore()
};

var flux = new Fluxxor.Flux(stores, actions);
Router.run(routes, function (Handler) {
    React.render(<Handler flux={flux} />, document.getElementById("app"));
});