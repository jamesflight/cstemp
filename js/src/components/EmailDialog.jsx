var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                    <h1 className="pink-text">Where should we send your results&#63;</h1>
                    <br/>
                    <input type="email" className="form-control input-lg" placeholder="Enter your email" />
                    <br/>
                    <div className="text-center">
                        <a href="#" className="btn btn-lg btn-warning">Send</a>
                    </div>
                </div>
            </div>
        );
    }
});