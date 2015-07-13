var React = require('react');
var ga = require('react-google-analytics');
var $ = require('jquery-browserify');

var LoadingButton = React.createClass({
    propTypes: {
        onChange:React.PropTypes.func,
        value:React.PropTypes.string,
        text:React.string
    },
    change: function (event) {
        this.props.onChange(event);
        var val = $(React.findDOMNode(this.refs.select)).val();
        ga('set', 'dimension5', val);
    },
    render: function(){
        return (
            <div>
                <select ref="select" data-filter="care_type" onChange={this.change} value={this.props.value} className="form-control input-lg grey-text">
                    <option value="" disabled selected>{this.props.text}</option>
                    <option value="NOT_SURE">Not Sure</option>
                    <option value="CARE_HOME">Care home</option>
                    <option value="NURSING_HOME">Nursing home</option>
                    <option value="HOME_CARE">Home care</option>
                </select>
            </div>
        );
    }
});

module.exports = LoadingButton;