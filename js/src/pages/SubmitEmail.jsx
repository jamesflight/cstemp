var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var SubmitEmailBox = require('./../components/SubmitEmailBox.jsx');
var ga = require('react-google-analytics');

module.exports = React.createClass({
    mixins: [FluxMixin],
    componentDidMount:function () {
        ga('send', 'pageview', '/your-details');
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <br/><br/>
                        <SubmitEmailBox />
                        <br/><br/>
                    </div>
                </div>
            </div>
        );
    }
});