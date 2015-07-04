var React = require('react/addons'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var PraiseWrapper = React.createClass({

	render: function() {

	    return ( 
            <div className="wrap" id="list">
                <FilteredPraiseList startNo={this.props.params.startNo} endNo={this.props.params.endNo} />
            </div>
        );
	}
});

module.exports = PraiseWrapper;