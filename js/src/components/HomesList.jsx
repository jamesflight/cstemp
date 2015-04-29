var React = require('react');
var HomeListing = require('./HomeListing.jsx');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var HomesList = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("HomesStore")],
    getInitialState: function () {
        return {

        }
    },
    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            carehomes: flux.store("HomesStore").getHomes(),
            loading: flux.store("HomesStore").isLoading()
        }
    },
    render: function(){
        return (
            <div>
                { this.state.loading ?
                    <div>
                        <img src="http://jamesflight.github.io/careselector-compare/img/ajax.gif" style={{width: 'auto', position: 'relative', left: '50%', marginLeft: '-22px'}} />
                        <hr />
                    </div> : null
                }
                {this.state.carehomes.map(function(home) {
                    return (
                        <HomeListing home={home} />
                    );
                })}
            </div>
        );
    }
});

module.exports = HomesList;