var React = require('react/addons'),
    Reflux = require('reflux'),
    PraiseStore = require('../stores/PraiseStore'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var SearchWrapper = React.createClass({

    mixins: [Reflux.connect(PraiseStore, 'praiseList')],

	render: function() {
		
        if(this.state.praiseList) {
    	    return <FilteredPraiseList praiseList={this.state.praiseList} />;
        }
        else {
            return false;
        }
	}
});

module.exports = SearchWrapper;