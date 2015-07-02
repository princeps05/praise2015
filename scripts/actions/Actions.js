var Reflux = require('reflux');

var Actions = Reflux.createActions([

	'changeHeader',	// 헤더 상태 변경
	'saveHistoryPraise',	// 헤더 저장

	'loadHistoryPraiseList',	// 내역에서 날짜 별 찬양 목록 불러오기
	'loadHistoryDateList',	// 내역에서 날짜 목록 불러오기

	'getAllPraiseList',
	'getTextFilteredPraiseList',
	'getNumberFilteredPraiseList',
	'getPraiseRangeList'	

]);

module.exports = Actions;