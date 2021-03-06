var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var FilterSelector = require('./../components/FilterSelector.jsx');
var PostcodeSearch = require('./../components/PostcodeSearch.jsx');
var NumberOfCareHomesBanner = require('./../components/NumberOfCareHomesBanner.jsx');
var ga = require('react-google-analytics');

module.exports = React.createClass({
    mixins: [FluxMixin],
    componentDidMount:function () {
        ga('send', 'pageview', '/searched');
    },
    render: function() {
        return (
            <div>
                <div className="green-background-picture">
                    <div className="container">
                        <div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <PostcodeSearch button={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NumberOfCareHomesBanner />
                <FilterSelector />
            </div>

        );
    }
});