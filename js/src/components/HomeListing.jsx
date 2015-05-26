var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var HomesListing = React.createClass({
    mixins:[FluxMixin],
    propTypes: {
       home:React.PropTypes.object.required
    },
    getInitialState: function () {
        return {
            buttonClass:'col-xs-2 add-listing-button'
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
        if (! this.props.home.inShortlist) {
            this.getFlux().actions.addToShortlist(this.props.home.id);
        }

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
    getRatingSrc: function () {
        if (this.props.home.rating === null) {
            return "/img/rating-system-0.png";
        }
        return "/img/rating-system-" + this.props.home.rating + ".png";
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
                        <div className="col-xs-5">
                            <h4><strong>{this.props.home.name}</strong> - {this.props.home.address_3}</h4>
                            <div>within <span className="grey-badge">{this.props.home.distance}km</span></div>
                            <hr/>
                            <h5>Care Rating:</h5>
                            <img src={this.getRatingSrc()} className="rating"/>

                        </div>
                        <div className="col-xs-5">
                            <img src="img/no-picture.png" className="home-image" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = HomesListing;