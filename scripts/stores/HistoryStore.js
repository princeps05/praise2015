'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	Actions = require('../actions/Actions');

var HistoryStore = Reflux.createStore({

	listenables: [Actions],

	_historyDateList : Immutable.List([]),

	onLoadHistoryDateList: function() {

		if(this._historyDateList.size) {
			this.trigger(this._historyDateList);
			return;
		} 

		for(var i=localStorage.length -1; i>=0; i--) {
			this._historyDateList = this._historyDateList.push(localStorage.key(i));
		}

		this.trigger(this._historyDateList);
	},

	onLoadHistoryPraiseList: function(date) {
		this.trigger(this.getHistoryDate(date));
	},

	getHistoryDate: function(date) {
		return Immutable.List( JSON.parse(localStorage.getItem(date)) );
	}
});

module.exports = HistoryStore;