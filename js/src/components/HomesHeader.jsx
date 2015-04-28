var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var HomesHeader = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("HomesStore")],
    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            filters: flux.store("HomesStore").getFilters()
        }
    },
    filterPostcode: function (event) {
        this.getFlux().actions.loadHomes({
            filter:'postcode',
            value: event.target.value
        });
    },
    filterRadius: function (event) {
        this.getFlux().actions.loadHomes({
            filter:'radius',
            value: event.target.value
        });
    },
    render: function(){
        return (
            <div className="panel">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h4>Find homes near:</h4>
                                </div>
                                <div className="col-xs-8">
                                    <input type="text" value={this.state.filters.postcode} onChange={this.filterPostcode} className="form-control block" id="postcode" placeholder="Postcode/Town" />
                                </div>

                                <div className="col-xs-4">
                                    <input type="number" value={this.state.filters.radius} onChange={this.filterRadius} className="form-control" id="radius" placeholder="Radius (km)" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 col-xs-offset-3">
                            <img src="img/logo.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HomesHeader;