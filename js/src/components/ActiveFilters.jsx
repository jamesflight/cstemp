var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            filters: [
                {
                    'id':1,
                    'name':'Dementia'
                },
                {
                    'id':2,
                    'name':'Mental Health'
                },
                {
                    'id':3,
                    'name':'Under 65'
                }
            ]
        }
    },
    render: function(){
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Care Type</label>
                                <select className="form-control input-lg">
                                    <option value="" disabled selected>Select type of care</option>
                                    <option value="care_home">Care home</option>
                                    <option value="nursing_home">Nursing home</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Postcode</label>
                                <input type="text" className="form-control input-lg" placeholer="Postcode" />
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <h4 className="grey-text">Filters </h4>
                    <select className="pink-button-small active">
                        <option value="" selected disabled>&#43; Add Filter</option>
                        <option value="dementia">Dementia</option>
                    </select>
                </div>
            { this.state.filters.map(function (filter) {
                return (
                    <div className="filter-option-small">{filter.name} <a href="#" className="filter-button-blue">Remove</a></div>
                );
            })}
            </div>
        );
    }
});