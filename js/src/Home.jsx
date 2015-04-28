var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var HomesList = require('./components/HomesList.jsx');
var Link = require('react-router').Link;

var Home = React.createClass({
    mixins: [FluxMixin],
    filterPostcode: function (event) {
        this.getFlux().actions.loadHomes({
            filter: 'postcode',
            value: event.target.value
        });
    },
    render: function() {
        return (
            <div className="container margin-top-48">
                <div className='jumbotron'>
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <img src="img/logo.png" />

                            <div className="form-group">
                                <input onChange={this.filterPostcode} type="text" className="form-control input-lg" id="postcode" placeholder="Postcode/Town" />
                            </div>
                            <div className="text-center">
                                <Link to="/homes" className="btn btn-lg btn-warning">Search</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;