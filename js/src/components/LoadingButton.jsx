var React = require('react');

var LoadingButton = React.createClass({
    propTypes: {
        text:React.PropTypes.string.isRequired,
        isLoading:React.PropTypes.bool.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState(props);
    },
    componentDidMount: function() {
        this.setState(this.props);
    },
    render: function(){
        return (
            <div>
                { this.state.isLoading &&
                    <img className="ajax-spinner" src="img/ajax.gif" />
                }

                { ! this.state.isLoading &&
                    <button onClick={this.props.onClick} className="btn btn-lg btn-warning">{this.state.text}</button>
                }
            </div>
        );
    }
});

module.exports = LoadingButton;