'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	DateTime = require('date-time-string'),
	DefaultDataBase = require('../utils/DefaultDataBase'),
	Actions = require('../actions/Actions');

var HeaderHistoryStore = Reflux.createStore({

	listenables: [Actions],

	_praiseList: Immutable.List([]),

	init: function() {
		this.initPraiseList();
	},

	initPraiseList: function() {
		this._praiseList = DefaultDataBase.getDefaultDataBase();
	},

	onSaveHistoryPraise: function(imgNo) {

		var _praise = this._praiseList.filter(function(praise){
			return praise.no === imgNo;
		});

		var _nowDate = DateTime.toDateString(),
			_todayPraiseList = JSON.parse(localStorage.getItem(_nowDate)),
			_list = [];

		if(_todayPraiseList) {
			_list = _todayPraiseList;
		}

		_list.push(_praise.get(0));

		localStorage.setItem(_nowDate, JSON.stringify( Immutable.List(_list) ));

		this.trigger({ no: imgNo, title: _praise.get(0).title, hasPraise: true });
	},

	onChangeHeader: function(imgNo) {

		if(!imgNo) {
			this.trigger();
			return;
		}

		var _imgNo = parseInt(imgNo),
			_list = Immutable.List( this.getHistoryDate(DateTime.toDateString()) );

		if(_list.size) {
			var _praise = _list.filter(function(praise) {
				return praise.no === _imgNo;
			});

			this.trigger({ no: _imgNo, title: this._praiseList.get(_imgNo -1).title, hasPraise: _praise.size? true : false });
		}
		else {
			this.trigger(this._praiseList.get(_imgNo -1));
		}
	},

	getHistoryDate: function(date) {
		return Immutable.List( JSON.parse(localStorage.getItem(date)) );
	}
});

module.exports = HeaderHistoryStore;