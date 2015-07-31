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
                        <div className="col-xs-12">
                            <br/><br/>
                            <h1 className="text-center">Thank you, your chart will be with you shortly.</h1><br></br>
                            <a href={this.getReportUrl()} target="_blank"><button className="hvr-wobble-horizontal">Get your report instantly!</button></a>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});