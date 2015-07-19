'use strict';

var Reflux = require('reflux');
//	Immutable = require('immutable'),
//	Request = require('superagent');

var Actions = Reflux.createActions({

	'changeHeader' : {},	// 헤더 상태 변경
	'saveHistoryPraise' : {},	// 헤더 저장

	'loadHistoryPraiseList' : { asyncResult: true },	// 내역에서 날짜 별 찬양 목록 불러오기
	'loadHistoryDateList' : { asyncResult: true },	// 내역에서 날짜 목록 불러오기

	'getTextFilteredPraiseList' : { asyncResult: true },
	'getNumberFilteredPraiseList' : { asyncResult: true },
	'getPraiseRangeList' : { asyncResult: true },

	'getPraiseList' : { asyncResult: true }

});


	// Actions.getPraiseList.listen(function() {

	// 	Request.get('../../data.json').end(function(err, res) {

	// 		if(res) {	console.log('Actions getPraiseList');
	// 			Actions.setPraiseList(Immutable.List(res.body));
	// 		}
	// 	}); 
	// });

module.exports = Actions;