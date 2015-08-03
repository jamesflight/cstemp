var React = require('react');
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var SubmitEmailBox = React.createClass({
    mixins: [FluxMixin, Navigation],
    submit: function () {
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(React.findDOMNode(this.refs.email).value)) {
            this.getFlux().actions.updateCareseekerEmail(React.findDOMNode(this.refs.email).value, function () {
                console.log('done');
                this.transitionTo('thank-you');
            }.bind(this));
        } else {
            // create the notification
                        var notification = new NotificationFx({
                            wrapper: document.body,
                            message : '<h4>Please enter a valid e-mail!</h4>',
                            layout : 'growl',
                            effect : 'jelly',
                            type : 'notice', // notice, warning, error or success
                            onClose : function() {
                            }
                        });

                        // show the notification
                        notification.show();
        }
    },
    render: function(){
        return (
            <div>
                <h2 className="text-center pink-text">Your In Depth Comparison Report Is Being Prepared</h2>
                <h4 className="text-center">Your chosen care providers are updating us now on their latest availability and prices</h4>            
            <br/>
            <div className="row">
                <div className="col-sm-6 col-sm-offset-1"><img src="img/table.gif" /></div>
                <div className="col-sm-4">
                <h4><strong>Reports Include</strong></h4>
                <ul>
                    <li>In depth information on how each provider can meet your loved ones needs</li>
                    <li>Up to date <strong>availability</strong></li>
                    <li>Up to date <strong>prices</strong></li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                <br/>
                <h4 className="text-left"><strong>Where should we send your chart when it is done&#63;</strong></h4>
                <input ref="email" type="email" className="form-control input-lg" placeholder="Enter your email" />
                <br/>
                <div className="text-center">
                    <div href="#" className="btn btn-lg pink-button" onClick={this.submit}>Send Me My Comparison</div>
                </div>
                <br></br><br></br>
            </div>

                
            </div>
            </div>
        );
    }
});

module.exports = SubmitEmailBox;