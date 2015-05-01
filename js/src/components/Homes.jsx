var React = require('react');
var HomesHeader = require('./HomesHeader.jsx');
var HomesFilterPanel = require('./HomesFilterPanel.jsx');
var HomesList = require('./HomesList.jsx');
var Flux = require('fluxxor');
var FluxMixin = Flux.FluxMixin(React);
var StoreWatchMixin = Flux.StoreWatchMixin;

var Homes = React.createClass({
    mixins: [FluxMixin,  StoreWatchMixin("HomesStore")],
    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            filters: flux.store("HomesStore").getFilters()
        }
    },
    render: function(){
        return (
            <div className="container margin-top-24">
                <div className="row">
                    <div className="col-xs-12">
                        <HomesHeader />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <h3>Care homes within {this.state.filters.radius}km of {this.state.filters.postcode}:</h3>
                        <hr/>
                        <HomesList />
                    </div>
                    <div className="col-xs-4">
                        <HomesFilterPanel />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Homes;