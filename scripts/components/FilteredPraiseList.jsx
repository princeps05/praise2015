var React = require('react/addons'),
	Reflux = require('reflux'),
	PureRenderMixin = React.addons.PureRenderMixin,
	PraiseOne = require('./PraiseOne.jsx'),
	InfiniteScroll = require('react-infinite-scroll')(React),
	Loader = require('halogen/PulseLoader'),
	DefaultValueObj = require('../utils/DefaultValueSetting'),
	Actions = require('../actions/Actions');

var SearchPraiseList = React.createClass({

	mixins: [
		Reflux.listenTo(Actions.getTextFilteredPraiseList.completed, 'getPraiseList'),
		Reflux.listenTo(Actions.getNumberFilteredPraiseList.completed, 'getPraiseList'),
		Reflux.listenTo(Actions.loadHistoryPraiseList.completed, 'getPraiseList')
	],

	componentWillMount: function() {	// 초기 목록 호출.			

		var _url = location.href;
		if(_url.indexOf('/search') > -1) {
			Actions.getTextFilteredPraiseList(1);
		}
		else if(_url.indexOf('/praiseList') > -1) {
			Actions.getNumberFilteredPraiseList(1, this.props.startNo, this.props.endNo);			
		}
		else if(_url.indexOf('/dateList') > -1) {
			Actions.loadHistoryPraiseList(1, this.props.date);
		}
	},

    getPraiseList: function(Obj) {

    	if(Obj.nextPage !== 1) {	// 두번째 페이지부터 덧붙임.

    		setTimeout(function () {
	      		this.setState({ praiseList: this.state.praiseList.concat(Obj.praiseList), hasMore: (Obj.nextPage < Obj.maxPage) });
        	}.bind(this), 1000);
        }
        else {	// 초기 목록 삽입.
        	this.setState({ praiseList: Obj.praiseList, hasMore: (Obj.nextPage < Obj.maxPage) });
        }
    },

	componentWillReceiveProps: function(nextProps) {
		Actions.getTextFilteredPraiseList(1, nextProps.filterText);
	},

	shouldComponentUpdate: function(nextProps, nextState) {	// getTextFilteredPraiseList 호출결과를 받는 동안 랜더링 방지.
		return nextState !== this.state;
	},

	loadMore: function(nextPage) {

		var _url = location.href;
		if(_url.indexOf('/search') > -1) {
			Actions.getTextFilteredPraiseList(nextPage, this.props.filterText);			
		}
		else if(_url.indexOf('/praiseList') > -1) {
			Actions.getNumberFilteredPraiseList(nextPage, this.props.startNo, this.props.endNo);						
		}
		else if(_url.indexOf('/dateList') > -1) {
			Actions.loadHistoryPraiseList(nextPage, this.props.date);
		}		
	},

	render: function() {
		
		if(this.state) {

			if(this.state.praiseList.size) {
			    return (
					<div className="list-group">
						<InfiniteScroll loader={<div className="loader"><Loader color="hotpink" /></div>} loadMore={this.loadMore} hasMore={this.state.hasMore}>
							{
								this.state.praiseList.map(function(praise) {
									return <PraiseOne praise={praise} key={praise.no} />;
								})
							}
						</InfiniteScroll>	
					</div>
		    	);
			}
			else {
				return <div className="alert alert-success noResult text-center">띄어쓰기 없이 제목이나 번호를 입력해주세요.</div>;
			}
		}		
		else {
			return false;
		}
	}
});

module.exports = SearchPraiseList;