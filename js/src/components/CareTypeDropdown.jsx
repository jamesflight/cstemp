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
            $('#overlay').addClass("md-overlay")
        } else {
            this.setState({
                showPopup:false
            });
            $('#overlay').removeClass("md-overlay")
        }
    },
    click: function () {
        this.setState({
            showPopup:false
        });
        $('#overlay').removeClass("md-overlay")
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

        <div className={ this.state.showPopup ? "md-modal md-effect-8 md-show" : "md-modal md-effect-8"} id="modal-8">
            <div className="md-content">
                <h3><center>Not sure?</center></h3>
                <div>
                    <h4><center>Not sure what to choose? Reading the article on our blog will help you understand what type of care you need!</center></h4><br></br>
                    <a href="http://careselector.com/blog/getting-care-understanding-what-type-of-care-you-need"><button className="buttonpop"><h5>Take me to the article!</h5></button></a>
                    <br></br>
                    <button onClick={this.click} className="buttonpop"><h5>No thanks!</h5></button>
                </div>
            </div>
        </div>

            </div>
        );
    }
});

module.exports = LoadingButton;