var React = require('react/addons'),
    Reflux = require('reflux'),
    HistoryStore = require('../stores/HistoryStore'),
    Actions = require('../actions/Actions'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var HistoryWrapper = React.createClass({

    mixins: [Reflux.connect(HistoryStore, 'praiseList')],

    componentWillMount: function() {
        Actions.loadHistoryPraiseList(this.props.params.date);
    },

    componentWillReceiveProps: function(nextProps) {
        Actions.loadHistoryPraiseList(nextProps.params.date);
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextState.praiseList !== this.state.praiseList;
    },

	render: function() {
        
        if(this.state.praiseList && this.state.praiseList.size) {
    	    return ( 
                <div className="wrap" id="list">
                    <FilteredPraiseList praiseList={this.state.praiseList} />;
                </div>
            );
        }
        else {
            return false;
        }
	}
});

module.exports = HistoryWrapper;