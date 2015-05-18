var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                    <h1>The average care home in your shortlist costs <span className="pink-text">X</span> per week.</h1>
                    <br/>
                    <h1>A care finance advisor could save you up to <span className="pink-text">X</span>, would you like to arrange a free consultation&#63;</h1>
                    <br/>
                    <a href="#" className="pink-button">Yes please, now send me my results.</a>
                    <br/>
                    <a href="#" className="blue-button">No thanks, now send me my results.</a>
                </div>
            </div>
        );
    }
});