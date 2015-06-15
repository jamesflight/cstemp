var React = require('react');

var LoadingButton = React.createClass({
    propTypes: {
        onChange:React.PropTypes.func,
        value:React.PropTypes.string,
        text:React.string
    },
    render: function(){
        return (
            <div>
                <select data-filter="care_type" onChange={this.props.onChange} value={this.props.value} className="form-control input-lg grey-text">
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