var React = require('react');

var HomesListing = React.createClass({
    getPhone: function () {
        var phone = this.props.home.phone;
        if (phone !== '') {
            return 0 + [phone.slice(0, 4), " ", phone.slice(4)].join('');
        }
    },
    getName: function () {
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
                <div className="panel-body">
                    <h4><strong>{this.props.home.name}</strong> - within {this.props.home.distance}km</h4>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-4">
                            <address>
                                <strong>{this.props.home.address_1}</strong><br/>
                                {this.props.home.address_2}<br/>
                                {this.props.home.address_3}<br/>
                                {this.props.home.postcode}
                            </address>

                        </div>
                        <div className="col-xs-8">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    How to Contact
                                </div>
                                <div className="panel-body">
                                    <div><strong>Tel: </strong>{this.getPhone()}</div>
                                    <div><strong>Name: </strong>{this.getName()}</div>
                                    <div><strong>Website:</strong> <a target="_blank" href={ this.getWebsite() }>{this.props.home.website}</a></div>
                                    <div><strong>Total Beds:</strong> {this.props.home.total_beds}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <h4>Specialisms:</h4>
                            {this.props.home.specialisms.map(function (specialism) {
                                return (
                                    <span className="btn btn-warning">{specialism}</span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = HomesListing;