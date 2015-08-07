var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ReactTooltip = require("react-tooltip");
var Utils = require("./../utils.js");
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var ga = require('react-google-analytics');

var HomesListing = React.createClass({
    mixins:[FluxMixin, StoreWatchMixin("FilterStore")],
    propTypes: {
       home:React.PropTypes.object.required
    },
    getInitialState: function () {
        return {
            buttonClass:'col-xs-2 add-listing-button'
        }
    },
    getStateFromFlux: function () {
        return {
            specialisms: this.getFlux().store("FilterStore").getSpecialismFilters()
        }
    },
    getPhone: function () {
        var phone = this.props.home.phone;
        if (phone !== '') {
            return 0 + [phone.slice(0, 4), " ", phone.slice(4)].join('');
        }
    },
    getName: function () {
        console.log(this.props.home.website);
        var name = this.props.home.contact_name;
        if (name !== null) {
            var names = name.split(',');

            var returnName = "";
            if (names[1] !== undefined) {
                returnName = returnName + names[1] + " ";
            }

            if (names[0] !== undefined) {
                returnName = returnName + names[0];
            }
            return returnName;
        }
    },
    addToShortlist: function () {
        ga('send', 'pageview', '/homeadded');
        ga('send','event','item','compare','click','click_on_home_in_shortlist',1);
        if (! this.props.home.inShortlist) {
            this.getFlux().actions.addToShortlist(this.props.home.id);
            }
        $(".ns-show").remove();

    },
    getWebsite: function () {
        return "http://" + this.props.home.website;
    },
    componentWillReceiveProps: function (newProps) {
        if (newProps.home.inShortlist === true) {
            this.setState({
                buttonClass:'col-xs-2 add-listing-button add-listing-button-shortlisted'
            });
            return;
        }

        this.setState({
            buttonClass:'col-xs-2 add-listing-button'
        });
    },
    componentDidMount: function () {
        var listingbody = $(React.findDOMNode(this.refs.listingbody));
        var listingtitle = $(React.findDOMNode(this.refs.listingtitle));
        var listingcarerating = $(React.findDOMNode(this.refs.listingcarerating));
        var listingimage = $(React.findDOMNode(this.refs.listingimage));

        listingbody.click(function () {
            ga('send', 'event', 'homelistingbody', 'click');
        });

        listingtitle.click(function () {
            ga('send', 'event', 'listingtitle', 'click');
        });

        listingcarerating.click(function () {
            ga('send', 'event', 'listingcarerating', 'click');
        });

        listingimage.click(function () {
            ga('send', 'event', 'listingimage', 'click');
        });

    },
    getRatingSrc: function () {
        if (this.props.home.rating === null) {
            return "/img/rating-system-0.png";
        }
        return "/img/rating-system-" + this.props.home.rating + ".png";
    },
    getSpecialismString: function () {
        var string = '';
        this.state.specialisms.forEach(function (specialism, index) {
            string += specialism.cleanName + ' | ';
        });
        if (string !== '') {
            return string.substring(0, string.length - 3);
        }
        return '';
    },
    trackinghomename: function () {
        ga('send','event','item','compare','click','click_on_a_home',1);
    },
    trackinghomeimage: function () {
        ga('send','event','item','compare','click','click_on_an_image',1);
    },
    trackinghomerating: function () {
        ga('send','event','item','compare','click','click_on_quality_rating',1);
    },
    render: function(){
        return (
            <div className="panel panel-success">
                <div className="panel-body no-padding">
                    <div className="row">
                        <div className={this.state.buttonClass} onClick={this.addToShortlist}>
                            <div className="add-listing-shortlisted">Shortlisted</div>
                            <div className="add-listing-triangle"></div>
                        </div>
                        <div ref="listingbody" className="col-xs-6">
                            <h4 ref="listingtitle" ><strong onClick={this.trackinghomename}>{this.props.home.name}</strong> - within <span className="blue-text">{this.props.home.distance}km</span></h4>
                            <div>{this.props.home.address_1}, {this.props.home.address_3}, {this.props.home.postcode}</div>
                            <hr/>
                            <div className="row">
                                <div ref="listingcarerating" className="col-xs-6">
                                    <p>Care Rating:</p>
                                    <img src={this.getRatingSrc()} data-tip="The care rating is provided by the Care Quality Commission, a government body that inspects care providers." className="rating" onClick={this.trackinghomerating}/>
                                </div>
                                <div className="col-xs-6">
                                    {
                                        this.getSpecialismString() !== '' &&
                                        <p>This home specialises in:</p>
                                    }
                                    <p className="grey-text">{this.getSpecialismString()}</p>
                                </div>
                            </div>


                        </div>
                        <div ref="listingimage" className="col-xs-4">
                        { this.props.home.thumbnail_url !== null &&
                            <img src={this.props.home.thumbnail_url} className="home-image" onClick={this.trackinghomeimage} />
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = HomesListing;