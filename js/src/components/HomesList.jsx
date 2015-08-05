var React = require('react');
var HomeListing = require('./HomeListing.jsx');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var HomesList = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("HomesStore")],
    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            carehomes: flux.store("HomesStore").getHomes(),
            loading: flux.store("HomesStore").isLoading(),
            count: flux.store("HomesStore").getCount()
        }
    },
    componentDidMount: function() {
        
        try {
        // Initialize the tour
        tour.init();

        // Start the tour
        tour.restart();
    } catch {}
    },
    render: function(){
        return (
            <div ref="element">
                <div><h3>Press the + button to add provider to the shortlist</h3></div>
                <hr />
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