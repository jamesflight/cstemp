var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var EmailDialog = require('./../components/EmailDialog.jsx');

module.exports = React.createClass({
    mixins: [FluxMixin],
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <EmailDialog />
                    </div>
                </div>
            </div>
        );
    }
});