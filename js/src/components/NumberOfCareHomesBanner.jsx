var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery-browserify');

module.exports = React.createClass({
    mixins:[FluxMixin, StoreWatchMixin('HomesStore', 'FilterStore')],
    getStateFromFlux: function () {
        return {
            cost: this.getFlux().store("FilterStore").getCost(),
            count: this.getFlux().store("HomesStore").getCount()
        }
    },
    componentDidMount: function () {
        var box = $(this.getDOMNode(this.refs.box));
        $('html, body').animate({
            scrollTop: box.offset().top
        }, 2000);

    },
    render: function(){
        return (
            <div ref="box" className="blue-background">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h2 className="white-text"><span className="pink-text">{this.state.count}</span> homes found with an average cost of <span className="pink-text">£{this.state.cost}</span> per week.</h2>
                            <h2 className="white-text">Let's refine your search:</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});