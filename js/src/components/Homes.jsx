var React = require('react');
var HomesHeader = require('./HomesHeader.jsx');
var HomesFilterPanel = require('./HomesFilterPanel.jsx');
var HomesList = require('./HomesList.jsx');

var Homes = React.createClass({
    render: function(){
        return (
            <div className="container margin-top-24">
                <div className="row">
                    <div className="col-xs-12">
                        <HomesHeader />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <h3>Care homes within 10km of Bristol:</h3>
                        <hr/>
                        <HomesList />
                    </div>
                    <div className="col-xs-4">
                        <HomesFilterPanel />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Homes;