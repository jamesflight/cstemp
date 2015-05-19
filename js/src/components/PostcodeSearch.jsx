var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var ErrorBox = require('./ErrorBox.jsx');
var LoadingButton = require('./LoadingButton.jsx');

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
    render: function(){
        return (
            <div className="padding-s">
                <h1 className="text-center pink-text">Find a care home your parents will love</h1>
                <h2 className="white-text text-center blue-text">Compare homes in your area</h2>
                <br/>
                <ErrorBox errors={this.state.errors} />
                <form>
                    <div className="form-group">
                        <select data-filter="care_type" onChange={this.updateFilter} value={this.state.filters.care_type} className="form-control input-lg">
                            <option value="" disabled selected>Select type of care</option>
                            <option value="care_home">Care home</option>
                            <option value="nursing_home">Nursing home</option>
                        </select>
                        <br/>
                        <input data-filter="postcode" onChange={this.updateFilter} value={this.state.filters.postcode} type="text" className="form-control input-lg text-center" placeholder="Enter Your Postcode" />
                    </div>
                    {
                        this.props.button &&
                            <div className="text-center">
                            <LoadingButton onClick={this.submit} text="View Homes" isLoading={this.state.isLoading} />
                            </div>
                    }
                </form>
            </div>
        );
    }
});