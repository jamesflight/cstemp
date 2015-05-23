var React = require('react');
var Link = require('react-router').Link;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var FilterSelectorOption = require('./FilterSelectorOption.jsx');
var LoadingButton = require('./LoadingButton.jsx');
var Navigation = require('react-router').Navigation;

module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('FilterStore', 'HomesStore'), Navigation],
    getStateFromFlux: function () {
        return {
            filters:this.getFlux().store("FilterStore").getState(),
            dementia: this.getFlux().store("FilterStore").hasFilter('dementia'),
            mental_health: this.getFlux().store("FilterStore").hasFilter('mental_health'),
            learning_disability: this.getFlux().store("FilterStore").hasFilter('learning_disability'),
            under_65: this.getFlux().store("FilterStore").hasFilter('under_65'),
            sensory_impairment: this.getFlux().store("FilterStore").hasFilter('sensory_impairment'),
            isLoading:this.getFlux().store("HomesStore").isLoading()
        };
    },
    addFilter: function (name) {
        this.getFlux().actions.updateFilter({
            filter:name,
            value:true
        });
    },
    removeFilter: function (name) {
        this.getFlux().actions.removeFilter(name);
    },
    submit: function () {
        this.getFlux().actions.loadHomes(this.state.filters, function () {
            this.transitionTo('compare');
        }.bind(this));
    },
    render: function(){
        return (
            <div className="container">
                <h1 className="pink-text text-center">Do you need a care home that specialises in:</h1>
                <FilterSelectorOption name="dementia" text="Dementia" isSelected={this.state.dementia} onYes={this.addFilter} onNo={this.removeFilter} />
                <FilterSelectorOption name="mental_health" text="Mental Health" isSelected={this.state.mental_health} onYes={this.addFilter} onNo={this.removeFilter} />
                <FilterSelectorOption name="learning_disability" text="Learning Disability" isSelected={this.state.learning_disability} onYes={this.addFilter} onNo={this.removeFilter} />
                <FilterSelectorOption name="under_65" text="Under 65" isSelected={this.state.under_65} onYes={this.addFilter} onNo={this.removeFilter} />
                <FilterSelectorOption name="sensory_impairment" text="Sensory Impariments (Deaf/Blind)" isSelected={this.state.sensory_impairment} onYes={this.addFilter} onNo={this.removeFilter} />

                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <div className="text-center">
                            <br/>
                            <LoadingButton onClick={this.submit} text="View Homes" isLoading={this.state.isLoading} />
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});