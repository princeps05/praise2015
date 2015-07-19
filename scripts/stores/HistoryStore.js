'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	Actions = require('../actions/Actions');

var HistoryStore = Reflux.createStore({

	listenables: [Actions],

	onLoadHistoryDateList: function() {

		var _historyDateList = Immutable.List([]);

		for(var i=localStorage.length -1; i>=0; i--) {
			_historyDateList = _historyDateList.push(localStorage.key(i));
		}

		Actions.loadHistoryDateList.completed(_historyDateList);
	},

	onLoadHistoryPraiseList: function(nextPage, date) {

		var _list = this.getHistoryDate(date);

		var	_length = _list.size,
			_nextPage = parseInt(nextPage),
			_endNo = _nextPage * 20,
			_startNo = _endNo - 20;

		if(_endNo > _length)	{
			_endNo = _length;
		}
		
		Actions.loadHistoryPraiseList.completed({praiseList:_list.slice(_startNo, _endNo), nextPage: nextPage, maxPage: Math.ceil(_length / 20)});
	},

	getHistoryDate: function(date) {
		return Immutable.List( JSON.parse(localStorage.getItem(date)) );
	}
});

module.exports = HistoryStore;