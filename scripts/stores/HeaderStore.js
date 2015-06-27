'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	DefaultDataBase = require('../utils/DefaultDataBase'),
	HeaderActions = require('../actions/HeaderActions');

var HeaderStore = Reflux.createStore({

	listenables: [HeaderActions],

	_praiseList: Immutable.List([]),

	init: function() {		
		this.initPraiseList();
	},

	initPraiseList: function() {
		this._praiseList = DefaultDataBase.getDefaultDataBase();
	},

	onGetNumberFilteredPraise: function(no) {

		if(!no) {	// 악보 이외 페이지인 경우.
			this.trigger();
			return;
		}
		
	   	this.trigger(this._praiseList.get(parseInt(no) -1));		
	},

	onGetTitleFilteredPraise: function() {
	   		
	},

});

module.exports = HeaderStore;