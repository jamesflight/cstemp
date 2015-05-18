var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <div className="blue-background">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h2 className="white-text"><span className="pink-text">X</span> homes found with an average cost of <span className="pink-text">X</span> per week.</h2>
                            <h2 className="white-text">Lets refine your search:</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});