var React = require('react');
var ga = require('react-google-analytics');
var $ = require('jquery-browserify');

var LoadingButton = React.createClass({
    propTypes: {
        onChange:React.PropTypes.func,
        value:React.PropTypes.string,
        text:React.string
    },
    getInitialState: function () {
        return {
            shopPopup:false
        }
    },
    change: function (event) {
        this.props.onChange(event);
        var val = $(React.findDOMNode(this.refs.select)).val();
        ga('set', 'dimension5', val);

        if (val === 'NOT_SURE') {
            this.setState({
                showPopup:true
            });
        } else {
            this.setState({
                showPopup:false
            });
        }
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

                { this.state.showPopup &&
                    <div>
                        <h1>Popup kjdsafjkl alkj kjladfs</h1>
                    </div>
                }

            </div>
        );
    }
});

module.exports = LoadingButton;