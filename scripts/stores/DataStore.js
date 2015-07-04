'use strict';

var Reflux = require('reflux'),
	Immutable = require('immutable'),
	DefaultDataBase = require('../utils/DefaultDataBase'),
	Request = require('superagent'),
	Actions = require('../actions/Actions');

var DataStore = Reflux.createStore({

	listenables: [Actions],

	_praiseList : Immutable.List([]),

	init: function() {		
		this._praiseList = DefaultDataBase.getDefaultDataBase();
	},

	getDefaultDataBase: function() {

		Request.get('../../data.json').end(function(err, res) {

			if(res) {
				Actions.completed(Immutable.List(res.body));
			}
			else {
				Actions.failed(Immutable.List(res.err));
			}
		});
   }

});

module.exports = DataStore;