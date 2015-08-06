var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery-browserify');
var LoadingButton = require('./LoadingButton.jsx');
var ga = require('react-google-analytics');
var Navigation = require('react-router').Navigation;

module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('HomesStore', 'FilterStore'), Navigation],
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
        ga('send','event','item','compare','click','remove_item_from_shortlist',1);
        this.getFlux().actions.removeFromShortlist(event.target.getAttribute('data-id'));
    },
    postShortlist: function () {
        ga('send', 'pageview', '/requestmade');
        if (this.state.homes.length > 0){
            this.getFlux().actions.postShortlistToServer(this.state.homes, this.state.filters, function () {
                this.transitionTo('email');
            }.bind(this));
        } else {
            // create the notification
            $(".ns-show").remove();

                            var notification = new NotificationFx({
                            wrapper: document.getElementById("message"),
                            message : '<h5><font color="#57C5C7">Please add providers to the shortlist!</font></h5>',
                            layout : 'growl',
                            effect : 'jelly',
                            type : 'notice', // notice, warning, error or success
                            onClose : function() {
                            }
                        });

                        // show the notification
                        notification.show();
        }
        
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
                            <p className="grey-text text-center">Add care providers to create your shortlist for comparison.</p>
                            </div>
                        }
                        <div id="message"></div>
                    </div>
                    <div className="text-center button-section">
                        <hr/>
                        { this.state.isLoading &&
                            <img className="ajax-spinner" src="img/ajax.gif" />
                        }

                        { ! this.state.isLoading &&
                            <div onClick={this.postShortlist} className="pink-button">Compare Care Providers On My Shortlist</div>
                        }

                    </div>
                </div>
            </div>
        );
    }
});