var Reflux = require('reflux');

var HeaderActions = Reflux.createActions([

	'getAllPraiseList',
	'getTextFilteredPraiseList',
	'getNumberFilteredPraiseList',
	'getPraiseRangeList'

]);

module.exports = HeaderActions;