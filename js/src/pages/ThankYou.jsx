var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ga = require('react-google-analytics');
var adwordsConversion = require('./../conversionpixels/adwords-conversion.html');
var facebookConversion = require('./../conversionpixels/facebook-conversion.html');

module.exports = React.createClass({
    mixins: [FluxMixin],
    componentDidMount:function () {
        ga('send', 'pageview', '/thank-you');

        $('body').append(adwordsConversion);
        $('body').append(facebookConversion);
    },
    render: function() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><br/>
                            <h1 className="text-center">Thank you, your chart will be with you shortly.</h1>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});