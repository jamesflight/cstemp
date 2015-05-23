var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var ErrorBox = require('./ErrorBox.jsx');
var LoadingButton = require('./LoadingButton.jsx');
var AddressSearchBox = require('./AddressSearchBox.jsx');
var CareTypeDropdown = require('./CareTypeDropdown.jsx');
var $ = require('jquery-browserify');

module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('FilterStore', 'HomesStore'), Navigation],
    getStateFromFlux: function () {
        return {
            filters:this.getFlux().store("FilterStore").getState(),
            errors:this.getFlux().store("HomesStore").getErrors(),
            isLoading:this.getFlux().store("HomesStore").isLoading()
        }
    },
    submit: function () {
        this.getFlux().actions.loadHomes(this.state.filters, function () {
            this.transitionTo('select-filters');
        }.bind(this));
    },
    updateFilter: function (event) {
        this.getFlux().actions.updateFilter({
            filter:event.target.dataset.filter,
            value:event.target.value
        });
    },
    updateAddressFilter: function (address) {
        this.getFlux().actions.updateFilter({
            filter:'address',
            value:address
        });
    },
    render: function(){
        return (
            <div className="padding-s">
                <h1 className="text-center pink-text big-header">Find a care home your parents will love</h1>
                <h2 className="text-center grey-text small-header">Compare homes in your area</h2>
                <br/>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <ErrorBox errors={this.state.errors} />

                            <div className="form-group">
                                <AddressSearchBox placeholder="Where would you like to find care? Town/City/Postcode" value={this.state.filters.address} onChange={this.updateAddressFilter} />
                                <br/>
                                <CareTypeDropdown ref="careTypeDropdown" text="What type of care do you need?" onChange={this.updateFilter} value={this.state.filters.care_type} />

                            </div>
                            {
                                this.props.button &&

                                    <div className="text-center">
                                        <br/>
                                    <LoadingButton onClick={this.submit} text="Search For Homes Now" isLoading={this.state.isLoading} />
                                    </div>
                            }
                    </div>
                </div>
            </div>
        );
    }
});