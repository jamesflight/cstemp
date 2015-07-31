var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var PostcodeSearch = require('./../components/PostcodeSearch.jsx');
var AddressSearchBox = require('./../components/AddressSearchBox.jsx');
var ga = require('react-google-analytics');

var Home = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    mixins: [FluxMixin],

    render: function() {
        return (
            <div className="green-background-picture">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-xs-12">
                                <br/><br/>
                                <PostcodeSearch
                                area={this.context.router.getCurrentParams().area}
                                careType={this.context.router.getCurrentParams().care_type}
                                careTypeSelection={this.context.router.getCurrentParams().care_type_name}
                                button={true} />
                                <br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
});

module.exports = Home;