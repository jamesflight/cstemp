var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var FilterSelector = require('./../components/FilterSelector.jsx');
var PostcodeSearch = require('./../components/PostcodeSearch.jsx');

module.exports = React.createClass({
    mixins: [FluxMixin],
    render: function() {
        return (
            <div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3">
                                <PostcodeSearch button={false} />
                            </div>
                        </div>
                    </div>
                </div>
                <FilterSelector />
            </div>
        );
    }
});