'use strict';

var DefaultValueSetting = {
	
	IMG_NO: 738,
    MIN_IMG_NO: 1,
    MAX_IMG_NO: 853,

    IMG_DIR: 'http://vespasiani.cdn3.cafe24.com/dure',

    RANGE_SIZE: 100,
    
    PAGE_SIZE: 20,

	getDefaultHomeValueObj: function() {

		return {
			imgNo: this.IMG_NO,
			minImgNo: this.MIN_IMG_NO,
			maxImgNo: this.MAX_IMG_NO,
			imgDir: this.IMG_DIR
		};
	},

	getDefaultHomeImgNo: function() {
		return {
			imgNo: this.IMG_NO
		};
	},

	getDefaultRangeSize: function() {
		return {
			rangeSize: this.RANGE_SIZE
		};
	},

	getDefaultPageSize: function() {
		return {
			pageSize: this.PAGE_SIZE
		};
	}
};

module.exports = DefaultValueSetting;