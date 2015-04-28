var React = require('react');
var Flux = require('fluxxor');
var FluxMixin = Flux.FluxMixin(React);

var HomesFilterPanel = React.createClass({
    mixins: [FluxMixin],
    getInitialState: function () {
        var flux = this.getFlux();
        return {
            filters: flux.store("HomesStore").getFilters()
        }
    },
    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            filters: flux.store("HomesStore").getFilters()
        }
    },
    filterSubstanceMisuse: function (event) {
        this.state.filters.substance_misuse = !this.state.filters.substance_misuse;
        this.filterBool('substance_misuse');
    },
    filterLearningDisability: function (event) {
        this.state.filters.learning_disability = !this.state.filters.learning_disability;
        this.filterBool('learning_disability');
    },
    filterMentalHealth: function (event) {
        this.state.filters.mental_health = !this.state.filters.mental_health;
        this.filterBool('mental_health');
    },
    filterDementia: function (event) {
        this.state.filters.dementia = !this.state.filters.dementia;
        this.filterBool('dementia');
    },
    filterEatingDisorder: function (event) {
        this.state.filters.eating_disorder = !this.state.filters.eating_disorder;
        this.filterBool('eating_disorder');
    },
    filterPhysicalDisability: function (event) {
        this.state.filters.physical_disability = !this.state.filters.physical_disability;
        this.filterBool('physical_disability');
    },
    filterSensoryImpairment: function (event) {
        this.state.filters.sensory_impairment = !this.state.filters.sensory_impairment;
        this.filterBool('sensory_impairment');
    },
    filterAutism: function (event) {
        this.state.filters.autism = !this.state.filters.autism;
        this.filterBool('autism');
    },
    filterBool: function (filter) {
        this.getFlux().actions.loadHomes({
            filter: filter,
            value: this.state.filters[filter]
        });
    },
    filterServiceType: function (event) {
        this.getFlux().actions.loadHomes({
            filter: 'service_type',
            value: event.target.value
        });
    },
    render: function(){
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                Filter
                </div>
                <div className="panel-body">
                    <h4>Needs/Specialities</h4>

                    <p>Show only homes that can accomodate residents with the following conditions:</p>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value={this.state.filters.substance_misuse} onChange={this.filterSubstanceMisuse}/> Substance Misuse
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.learning_disability} onChange={this.filterLearningDisability}/> Learning Disability
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.mental_health} onChange={this.filterMentalHealth}/> Mental health needs
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.dementia} onChange={this.filterDementia}/> Dementia
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.eating_disorder} onChange={this.filterEatingDisorder}/> Eating disorder
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.physical_disability} onChange={this.filterPhysicalDisability}/> Physical Disability
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.sensory_impairment} onChange={this.filterSensoryImpairment}/> Sensory Impairment
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" value={this.state.filters.filterAutism} onChange={this.filterAutism}/> Autism
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Service Type</label>
                        <select multiple="" onChange={this.filterServiceType} className="form-control">
                            <option value="CARE_HOME">Care Home</option>
                            <option value="NURSING_HOME">Nursing Home</option>
                        </select>
                    </div>
                </div>

            </div>

        );
    }
});

module.exports = HomesFilterPanel;