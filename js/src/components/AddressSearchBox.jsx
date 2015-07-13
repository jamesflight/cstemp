var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var ErrorBox = require('./ErrorBox.jsx');
var LoadingButton = require('./LoadingButton.jsx');
var cx = require('classnames');
var $ = require('jquery-browserify');

module.exports = React.createClass({
    propTypes: {
        onChange:React.PropTypes.func,
        onEnter:React.PropTypes.func,
        value:React.PropTypes.string,
        placeholder:React.PropTypes.string
    },
    getInitialState: function () {
        return {
            value: this.props.value,
            enterPressed:false
        };
    },
    componentDidMount: function () {
        var input = React.findDOMNode(this.refs.input);

        this.autocomplete = new google.maps.places.Autocomplete(input, {
            componentRestrictions: {country: 'uk'},
            types:['geocode']
        });
        input = $(input);

        google.maps.event.addListener(this.autocomplete, 'place_changed', function() {
            this.changeAddress(input.val());
        }.bind(this));
    },
    onChange: function (event) {
        this.changeAddress(event.target.value);
    },
    onKeyUp:function (event) {
        switch(event.keyCode) {
            case 13:
                this.enterPressed = true;
                break;
            default:
                break;
        }
    },
    changeAddress: function (value) {
        ga('set', 'dimension6', value);
        this.props.onChange(value);

        if (this.enterPressed === true) {
            this.props.onEnter();
            this.enterPressed = false;
        }
    },
    render: function(){
        return (
            <div>
                <input ref="input" type="text" value={this.props.value} onChange={this.onChange} onKeyUp={this.onKeyUp} className="form-control input-lg" placeholder={this.props.placeholder} />
            </div>
        );
    }
});