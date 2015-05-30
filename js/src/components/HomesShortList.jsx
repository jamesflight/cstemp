var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery-browserify');
var LoadingButton = require('./LoadingButton.jsx');
var ga = require('react-google-analytics');

module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('HomesStore', 'FilterStore')],
    stuck: false,
    getStateFromFlux: function () {
        return {
            filters: this.getFlux().store("FilterStore").getState(),
            homes: this.getFlux().store("HomesStore").getShortlist(),
            isLoading: this.getFlux().store("HomesStore").getIsSendingShortlistToServer()
        }
    },
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
    removeFromShortlist: function (event) {
        this.getFlux().actions.removeFromShortlist(event.target.getAttribute('data-id'));
    },
    postShortlist: function () {
        ga('send', 'pageview', '/requestmade');
        this.getFlux().actions.postShortlistToServer(this.state.homes, this.state.filters);
    },
    render: function(){
        return (
            <div className="padding-tb-s">
                <div className="panel padding-s pink-border">
                    <div className="shortlist-scroll">
                        <h2 className="pink-text text-center">Create Your Shortlist</h2>
                        {
                            this.state.homes.map(function (home) {
                                return (
                                    <div>
                                        <hr/>
                                        <div className="position-relative">
                                            <h5 className="blue-text">{home.name}</h5>
                                            <p className="grey-text">{home.postcode}</p>
                                            <div data-id={home.id} onClick={this.removeFromShortlist} className="close-icon grey-text">x</div>
                                        </div>
                                    </div>
                                )
                            }.bind(this))
                        }
                        { this.state.homes.length === 0 &&
                            <div>
                                <hr/>
                            <p className="grey-text text-center">Add care homes to create your shortlist for comparison.</p>
                            </div>
                        }
                    </div>
                    <div className="text-center button-section">
                        <hr/>
                        { this.state.isLoading &&
                            <img className="ajax-spinner" src="img/ajax.gif" />
                        }

                        { ! this.state.isLoading &&
                            <div onClick={this.postShortlist} className="pink-button">Compare Homes On My Shortlist</div>
                        }

                    </div>
                </div>
            </div>
        );
    }
});