var React = require('react/addons'),
    Reflux = require('reflux'),
    PraiseStore = require('../stores/PraiseStore'),
    Actions = require('../actions/Actions'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var PraiseWrapper = React.createClass({

    mixins: [Reflux.connect(PraiseStore, 'praiseList')],

    componentWillMount: function() {
        Actions.getNumberFilteredPraiseList(this.props.params.startNo, this.props.params.endNo);
    },

    componentWillReceiveProps: function(nextProps) {
        Actions.getNumberFilteredPraiseList(nextProps.params.startNo, nextProps.params.endNo);
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

module.exports = PraiseWrapper;