var React = require('react');

var HomesListing = React.createClass({
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
    getWebsite: function () {
        return "http://" + this.props.home.website;
    },
    render: function(){
        return (
            <div className="panel panel-success">
                <div className="panel-body no-padding">
                    <div className="row">
                        <div className="col-xs-2 add-listing-button">
                            <div className="add-listing-shortlisted">Shortlisted</div>
                            <div className="add-listing-triangle"></div>
                        </div>
                        <div className="col-xs-5">
                            <h4><strong>{this.props.home.name}</strong> - within {this.props.home.distance}km</h4>
                            <hr/>
                                <address>
                                { this.props.home.address_1 !== null ?
                                    <div>
                                        <strong>{this.props.home.address_1}</strong> < br />
                                    </div> : null
                                }
                                { this.props.home.address_2 !== null ?
                                    <div>
                                        {this.props.home.address_2} < br />
                                    </div> : null
                                }
                                 { this.props.home.address_3 !== null ?
                                     <div>
                                         {this.props.home.address_3} < br />
                                     </div> : null
                                 }
                                { this.props.home.postcode !== null ?
                                    <div>
                                        {this.props.home.postcode} < br />
                                    </div> : null
                                    }
                                </address>
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