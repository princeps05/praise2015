'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	DefaultDataBase = require('../utils/DefaultDataBase'),
	PraiseActions = require('../actions/PraiseActions');

var PraiseStore = Reflux.createStore({

	listenables: [PraiseActions],

	_praiseList: Immutable.List([]),
	_filterText: '',

	init: function() {		
		this.initPraiseList();
	},

	initPraiseList: function() {
		this._praiseList = DefaultDataBase.getDefaultDataBase();
	},

	onGetAllPraiseList: function() {
		this.trigger(this._praiseList);
	},

	onGetTextFilteredPraiseList: function(filterText) {	// 검색에 메모이즈 적용 고려 중. 

		if(this._filterText === filterText) { // 같은거 연속 검색 방지.
			return;
		}

		if(!filterText) {	// 첫 랜더링 시.
			return this.trigger(this._praiseList);
		}
		else {

			this._filterText = filterText;
			this.trigger(this._praiseList.filter(function(praise){
				return (praise.no.toString().indexOf(this._filterText) > -1 || praise.title.indexOf(this._filterText) > -1);			
			}.bind(this)));
		}
	},

	onGetNumberFilteredPraiseList: function(startNo, endNo) {

		this.trigger(this._praiseList.filter(function(praise){
			return (praise.no >= startNo && praise.no <= endNo);
		}));
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