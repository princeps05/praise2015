'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	DefaultDataBase = require('../utils/DefaultDataBase'),
	Actions = require('../actions/Actions');

var PraiseStore = Reflux.createStore({

	listenables: [Actions],

	_praiseList: Immutable.List([]),

	init: function() {		
		this.initPraiseList();
	},

	initPraiseList: function() {
		this._praiseList = DefaultDataBase.getDefaultDataBase();
	},

	onGetTextFilteredPraiseList: function(nextPage, filterText) {	// 메모이즈 적용 고려 중. 

		var _list = this._praiseList,
			_filterText =  filterText;

		if(_filterText) {

			_list = this._praiseList.filter(function(praise){
				return (praise.no.toString().indexOf(filterText) > -1 || praise.title.indexOf(_filterText) > -1);			
			});
		}

		var	_length = _list.size,
			_nextPage = parseInt(nextPage),
			_endNo = _nextPage * 25,
			_startNo = _endNo - 25;

		if(_endNo > _length)	{
			_endNo = _length;
		}

		Actions.getTextFilteredPraiseList.completed({praiseList:_list.slice(_startNo, _endNo), nextPage: nextPage, maxPage: Math.ceil(_length / 25)});
	},

	onGetNumberFilteredPraiseList: function(nextPage, startNo, endNo) {	// 메모이즈 적용 고려 중.

		var _list = this._praiseList.filter(function(praise){
			return (praise.no >= startNo && praise.no <= endNo);
		});

		var	_length = _list.size,
			_nextPage = parseInt(nextPage),
			_endNo = _nextPage * 35,
			_startNo = _endNo - 35;

		if(_endNo > _length)	{
			_endNo = _length;
		}	

		Actions.getNumberFilteredPraiseList.completed({praiseList:_list.slice(_startNo, _endNo), nextPage: nextPage, maxPage: Math.ceil(_length / 35)});
	},

	onGetPraiseRangeList: function(rangeSize) {

		var praiseRangeList = [],
			praiseRange = {},
			length = this._praiseList.size;

		for(var i=1; i<=length / rangeSize +1; i++)  {

			praiseRange.endNo = i * rangeSize;
			praiseRange.startNo = praiseRange.endNo - rangeSize+1;
		 
			if(praiseRange.endNo > length)   {
				praiseRange.endNo = length;
			}
		 
			praiseRangeList.push(praiseRange);
			praiseRange = {};
		}

		this.trigger(Immutable.List(praiseRangeList));
	}
});

module.exports = PraiseStore;