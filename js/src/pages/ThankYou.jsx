var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ga = require('react-google-analytics');
var adwordsConversion = require('./../conversionpixels/adwords-conversion.html');
var facebookConversion = require('./../conversionpixels/facebook-conversion.html');
var config = require('./../config.js');

module.exports = React.createClass({
    mixins: [FluxMixin],
    componentDidMount:function () {
        ga('send', 'pageview', '/thank-you');

        $('body').append(adwordsConversion);
        $('body').append(facebookConversion);
    },
       getReportUrl: function () {
      	  return config.CORE_URL + 'careseekers/' + localStorage.getItem('careseeker_id') + '/report';
    },
    render: function() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <br/><br/>
                            <h1 className="text-center">Thanks! Your Report Has Been Sent To You</h1><br></br>
                            <h3 className="text-center">We’re busy talking to your chosen care providers and updating their latest availability and prices. You can see the latest version of your report here.</h3>
                            <h3 className="text-center">We’ll notify you when its complete!</h3><br></br>
                            <a href={this.getReportUrl()} target="_blank"><button className="hvr-wobble-horizontal orange-button">See your Comparison Report Now</button></a>
                            <br/><br/>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});