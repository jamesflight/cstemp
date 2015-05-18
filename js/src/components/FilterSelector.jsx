var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        return (
            <div className="container">
                <h1 className="pink-text text-center">Do you need a care home that specialises in:</h1>
                <div className="filter-option">
                    Dementia <div className="filter-button">No</div><div className="filter-button active">Yes</div>
                </div>
                <div className="filter-option">
                    Mental Health <div className="filter-button active">No</div><div className="filter-button">Yes</div>
                </div>
                <div className="filter-option">
                    Learning Disabilities <div className="filter-button">No</div><div className="filter-button active">Yes</div>
                </div>
                <div className="filter-option">
                    Under 65 <div className="filter-button">No</div><div className="filter-button active">Yes</div>
                </div>
                <div className="filter-option">
                    Sensory impairment (Deaf/Blind) <div className="filter-button active">No</div><div className="filter-button">Yes</div>
                </div>
                <div className="text-center">
                    <Link to="/compare" className="btn btn-lg btn-warning">View homes</Link>
                </div>
            </div>
        );
    }
});