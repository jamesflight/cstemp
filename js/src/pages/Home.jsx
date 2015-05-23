var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var PostcodeSearch = require('./../components/PostcodeSearch.jsx');
var AddressSearchBox = require('./../components/AddressSearchBox.jsx');

var Home = React.createClass({
    mixins: [FluxMixin],
    test: function (address) {
        console.log(address);
    },
    render: function() {
        return (
            <div>

                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-xs-12">
                                <PostcodeSearch  button={true} />
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