var React = require('react');

var HomesListing = React.createClass({
    render: function(){
        return (
            <div className="panel panel-success">
                <div className="panel-body">
                    <h4><strong>{this.props.home.name}</strong> - {this.props.home.distance}</h4>
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
                                    <div><strong>Tel: </strong>{this.props.home.phone}</div>
                                    <div><strong>Name: </strong>{this.props.home.contact_name}</div>
                                    <div><a href="{this.props.home.website}">{this.props.home.website}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = HomesListing;