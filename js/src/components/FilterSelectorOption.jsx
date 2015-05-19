var React = require('react/addons');
var cx = require('classnames');
var Link = require('react-router').Link;

module.exports = React.createClass({
    propTypes: {
        name:React.PropTypes.string.isRequired,
        text:React.PropTypes.string.isRequired,
        isSelected:React.PropTypes.bool.isRequired,
        onYes:React.PropTypes.func.isRequired,
        onNo:React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return this.getClasses(this.props.isSelected);
    },
    componentWillReceiveProps: function(props) {
        this.setState(this.getClasses(props.isSelected));
    },
    getClasses: function (isSelected) {
        return {
            yesClasses: cx({
                'filter-button': true,
                'active': isSelected
            }),
            noClasses: cx({
                'filter-button': true,
                'active': ! isSelected
            })
        };
    },
    no: function () {
        this.props.onNo(this.props.name);
    },
    yes: function () {
        this.props.onYes(this.props.name);
    },
    render: function(){
        return (
                <div className="filter-option">
                {this.props.text}
                    <div onClick={this.no} className={this.state.noClasses}>No</div>
                    <div onClick={this.yes} className={this.state.yesClasses}>Yes</div>
                </div>
        );
    }
});