var React = require('react');
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var SubmitEmailBox = React.createClass({
    mixins: [FluxMixin, Navigation],
    submit: function () {
        this.getFlux().actions.updateCareseekerEmail(React.findDOMNode(this.refs.email).value, function () {
            console.log('done');
            this.transitionTo('thank-you');
        }.bind(this));
    },
    render: function(){
        return (
            <div>
                <h2 className="text-center pink-text">Your comparison chart is being assembled and we are checking for availability.</h2>
                <h3 className="text-center blue-text">Where should we send your chart when it is done&#63;</h3>
                <br/>
                <input ref="email" type="email" className="form-control input-lg" placeholder="Enter your email" />
                <br/>
                <div className="text-center">
                    <div href="#" className="btn btn-lg pink-button" onClick={this.submit}>Send Me My Comparison</div>
                </div>
            </div>
        );
    }
});

module.exports = SubmitEmailBox;