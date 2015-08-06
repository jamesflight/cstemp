var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App.jsx');
var routes = require('./routes.jsx');
var actions = require('./actions.js');
var Fluxxor = require("fluxxor");
var HomesStore = require('./stores/HomesStore.js');
var FilterStore = require('./stores/FilterStore.js');
var AddressStore = require('./stores/AddressStore.js');

var stores = {
    HomesStore: new HomesStore(),
    FilterStore: new FilterStore(),
    AddressStore: new AddressStore()
};

var flux = new Fluxxor.Flux(stores, actions);
Router.run(routes, function (Handler) {
	try{
		tour.end();
	} catch(err){}

	$(".popover.tour-tour").remove()
    React.render(<Handler flux={flux} />, document.getElementById("app"));
});