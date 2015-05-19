var React = require('react');

var ErrorBox = React.createClass({
    propTypes: {
        errors:React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        return {
            errors: []
        }
    },
    hasErrors: function () {
        if (this.state.errors.length > 0) {
            return true;
        }
        return false;
    },
    componentWillReceiveProps: function(props) {
        this.setState({
            errors: props.errors
        });
    },
    render: function(){
        return (
            <div>
                { this.hasErrors() &&
                    <div className="panel panel-info">
                        <div className="panel-body">
                            {
                                this.state.errors.map(function (error) {
                                    return (
                                        <div className="error">{error}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
});

module.exports = ErrorBox;