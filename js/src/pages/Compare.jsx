var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var HomesShortList = require('./../components/HomesShortList.jsx');
var ActiveFilters = require('./../components/ActiveFilters.jsx');
var HomesList = require('./../components/HomesList.jsx');

module.exports = React.createClass({
    mixins: [FluxMixin],
    componentDidMount:function () {
        ga('send', 'pageview', '/filtered');
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4">
                        <HomesShortList />
                    </div>
                    <div className="col-xs-8">
                        <br/>
                        <ActiveFilters />
                        <hr/>
                        <HomesList />
                    </div>
                </div>
            </div>
        );
    }
});