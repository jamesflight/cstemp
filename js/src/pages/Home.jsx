var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var PostcodeSearch = require('./../components/PostcodeSearch.jsx');

var Home = React.createClass({
    mixins: [FluxMixin],
    render: function() {
        return (
            <div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3 black-box">
                                <PostcodeSearch  button={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;