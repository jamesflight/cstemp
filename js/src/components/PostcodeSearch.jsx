var React = require('react');
var Link = require('react-router').Link;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('FilterStore')],
    getStateFromFlux: function () {
        return {
            filters:this.getFlux().store("FilterStore").getState()
        }
    },
    submit: function () {
        this.getFlux().actions.loadHomes(this.state.filters);
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
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <select data-filter="care_type" onChange={this.updateFilter} className="form-control input-lg">
                            <option value="" disabled selected>Select type of care</option>
                            <option value="care_home">Care home</option>
                            <option value="nursing_home">Nursing home</option>
                        </select>
                        <br/>
                        <input data-filter="postcode" onChange={this.updateFilter} type="text" className="form-control input-lg text-center" placeholder="Enter Your Postcode" />
                    </div>
                    {
                        this.props.button &&
                            <div className="text-center">
                            <button className="btn btn-lg btn-warning">View Homes</button>
                            </div>
                    }
                </form>
            </div>
        );
    }
});