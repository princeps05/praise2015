var React = require('react/addons'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var HistoryWrapper = React.createClass({

	render: function() {
        
	    return ( 
            <div className="wrap" id="list">
                <FilteredPraiseList date={this.props.params.date} />
            </div>
        );
	}
});

module.exports = HistoryWrapper;