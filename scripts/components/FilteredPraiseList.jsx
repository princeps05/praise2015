var React = require('react/addons'),
	PureRenderMixin = React.addons.PureRenderMixin,
	PraiseOne = require('./PraiseOne.jsx'),
	InfiniteScrollMixin = require('react-infinite-scroll-mixin'),
	DefaultValueObj = require('../utils/DefaultValueSetting');

var FilteredPraiseList = React.createClass({

	mixins: [InfiniteScrollMixin, PureRenderMixin],

   	getDefaultProps: function() {
   		return DefaultValueObj.getDefaultPageSize();
   	},

	componentWillMount: function() {
		this.setState({ praiseList : this.props.praiseList.slice(0, this.props.pageSize) });
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({ praiseList : nextProps.praiseList.slice(0, this.props.pageSize) });
	},

	fetchNextPage: function(nextPage) {
		
		var list = this.props.praiseList,
			length = list.size,
			_nextPage = parseInt(nextPage) +1;

		if(_nextPage > Math.ceil(length / this.props.pageSize))	{
			return;
		}

		var endNo = _nextPage * this.props.pageSize,
			startNo = endNo - this.props.pageSize;

		if(endNo > length)	{
			endNo = length;
		}

		this.setState({ praiseList: this.state.praiseList.concat( list.slice(startNo, endNo) ) });
	},

	render: function() {
		
	    return (
			<div className="list-group">
				{
					this.state.praiseList.map(function(praise) {
						return <PraiseOne praise={praise} key={praise.no} />;
					})
				}
			</div>
    	);
	}
});

module.exports = FilteredPraiseList;