var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery-browserify');

module.exports = React.createClass({
    mixins: [FluxMixin],
    stuck: false,
    componentDidMount: function() {
        var el = $(this.getDOMNode());

        $(window).scroll(function () {
            if ($(window).scrollTop() >= el.offset().top) {
                el.addClass('sticky');

                if (this.stuck === false) {
                    this.offsetTop = el.offset().top;
                }
                this.stuck = true;
            }

            if ($(window).scrollTop() < this.offsetTop) {
                el.removeClass('sticky');
                this.stuck = false;
            }

        }.bind(this));
    },
    render: function(){
        return (
            <div className="panel panel-info padding-s">
                <h2 className="pink-text text-center">My Shortlist</h2>
                <hr/>
                <div className="position-relative">
                    <h5 className="blue-text">Stokeleigh Lodge - 1km</h5>
                    <p className="grey-text">BS6 7QQ</p>
                    <div className="close-icon grey-text">x</div>
                </div>
                <hr/>
                <p className="grey-text text-center">Add care homes to create your shortlist for comparison.</p>
                <hr/>
                <div className="text-center">
                    <a href="#" className="pink-button">Compare Homes</a>
                </div>
            </div>
        );
    }
});