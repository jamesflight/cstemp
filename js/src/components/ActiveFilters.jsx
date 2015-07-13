var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery-browserify');
var CareTypeDropdown = require('./CareTypeDropdown.jsx');
var AddressSearchBox = require('./AddressSearchBox.jsx');
var ga = require('react-google-analytics');

module.exports = React.createClass({
    mixins:[FluxMixin, StoreWatchMixin('FilterStore')],
    getStateFromFlux: function () {
        return {
            filters: this.getFlux().store('FilterStore').getState(),
            specialismFilters: this.getFlux().store('FilterStore').getSpecialismFilters(),
            mainFilters: this.getFlux().store('FilterStore').getMainFilters()
        }
    },
    removeFilter: function (event) {
        this.getFlux().actions.removeFilter(event.target.getAttribute('data-filter'));
        this.loadHomes();
    },
    addFilter: function (event) {
        var select = $(event.target);

        var val = select.val();

        if (val === 'dementia') {
            ga('set', 'dimension1', true);
        }

        if (val === 'learning_disability') {
            ga('set', 'dimension2', true);
        }

        if (val === 'under_65') {
            ga('set', 'dimension3', true);
        }

        if (val === 'sensory_impairment') {
            ga('set', 'dimension4', true);
        }

        this.getFlux().actions.updateFilter({
            filter:val,
            value:true
        });
        select.val('');
        this.loadHomes();
    },
    updateCareType: function (event) {
        this.getFlux().actions.updateFilter({
            filter:'care_type',
            value:event.target.value
        });
        this.loadHomes();
    },
    updateAddress: function (address) {
        this.getFlux().actions.updateFilter({
            filter:'address',
            value:address
        });
    },
    loadHomes: function () {
        this.getFlux().actions.loadHomes(this.state.filters);
    },
    render: function(){
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Location</label>
                                <AddressSearchBox onEnter={this.loadHomes} placeholder="Location" value={this.state.mainFilters.address} onChange={this.updateAddress} />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Care Type</label>
                                <CareTypeDropdown onChange={this.updateCareType} value={this.state.mainFilters.care_type} />
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <h4 className="grey-text">Filters </h4>
                    <select onChange={this.addFilter} className="grey-button-small active">
                        <option value="" selected disabled>&#43; Add Filter</option>
                        <option value="dementia">Dementia</option>
                        <option value="learning_disability">Learning disability</option>
                        <option value="under_65">Under 65</option>
                        <option value="sensory_impairment">Sensory impairment</option>
                    </select>
                </div>
            { this.state.specialismFilters.map(function (filter) {
                return (
                    <div className="filter-option-small">{filter.cleanName} <span data-filter={filter.name} onClick={this.removeFilter} className="filter-button-grey">Remove</span></div>
                );
            }.bind(this))}
            </div>
        );
    }
});