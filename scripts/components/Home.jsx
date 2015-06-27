var React = require('react/addons'),
	PureRenderMixin = React.addons.PureRenderMixin,
	HeaderActions = require('../actions/HeaderActions'),
	Swipeable = require('react-swipeable'),
	DateTime = require('date-time-string');

var Home = React.createClass({

	mixins: [PureRenderMixin],

    propTypes: {
        imgNo: React.PropTypes.number
    },

	getInitialState: function() {

      	return {
        	imgNo: 738
      	};
   	},

   	getDefaultProps: function() {

   		return {
        	imgNo: 738,
        	minImgNo: 1,
        	maxImgNo: 853,
        	imgDir: 'http://vespasiani.cdn3.cafe24.com/dure'
      	};
   	},

   	touchImg: function() {
   		var imgNode = React.findDOMNode(this.refs.praiseImg);
   		imgNode.className = (imgNode.className.indexOf('imageEnlargement') > -1)? '' : 'imageEnlargement';
  	},

  	saveHistory: function(imgNo) {

    //   	Utility.getPraiseTitle(imgNo).then(function(title) {

	  	// 	var nowDate = DateTime.toDateString(),
	  	// 		item = localStorage.getItem(nowDate),
	  	// 		list = [];

	  	// 	if(item) {
	  	// 		list = item.split(",");
	  	// 	}

  		// 	list.push(this.state.imgNo + "장 " + title);
 			// localStorage.setItem(nowDate, list);

    //     }.bind(this));
  	},

  	isValidImg: function(imgNo) {
  		var _imgNo = parseInt(imgNo);
  		return (_imgNo <= this.props.maxImgNo && _imgNo >= this.props.minImgNo)? true : false; 
  	},

  	hasImageEnlargementClass: function() {
   		return React.findDOMNode(this.refs.praiseImg).className.indexOf('imageEnlargement') > -1? true : false;
  	},

  	setParamImgNo: function(imgNo) {

  		var _imgNo = parseInt(imgNo);

		if(!this.isValidImg(imgNo)) {	// 유효한 이미지 번호가 아닐 경우.
			_imgNo = parseInt(localStorage.getItem("imgNo"));	// 로컬 스토리지에서 가져온 이미지 번호 저장.
			if(!_imgNo){	// 로컬 스토리지에도 없는 경우.
				_imgNo = parseInt(this.props.imgNo);	// 디폴트 이미지 번호 저장.
			}
		}

		this.setState({ imgNo : _imgNo });
  	},

	componentWillMount: function() {	// 첫 랜더링 직전 호출.
		this.setParamImgNo(this.props.params.imgNo);
	},

	componentWillReceiveProps: function(nextProps) {	// 새로운 값을 받았을 때 호출.
		this.setParamImgNo(nextProps.params.imgNo);
	},

	getPath: function(imgNo) {
		return location.href.indexOf("localhost") > -1? "/#/dure/" + imgNo : "/praise/#/dure/" + imgNo;
	},

	setSwipeImgNo: function(direction) {

		if(this.hasImageEnlargementClass()) {
			return;
		}

		var _imgNo = (direction === "right")? parseInt(this.state.imgNo) -1 : parseInt(this.state.imgNo) +1;

		if(this.isValidImg(_imgNo)) {
			history.pushState(null, _imgNo, this.getPath(_imgNo));
		}
		else {
			_imgNo = (_imgNo > this.props.maxImgNo)? this.props.minImgNo : this.props.maxImgNo; 
			history.pushState(null, _imgNo, this.getPath(_imgNo));
		}

		this.setState({ imgNo : _imgNo });
	},

	swipedRight: function() {
		this.setSwipeImgNo("right");
	},

	swipedLeft: function() {
		this.setSwipeImgNo("left");
	},

	commonAction: function() {

		HeaderActions.getNumberFilteredPraise(this.state.imgNo);	// 헤더 변경.
		localStorage.setItem("imgNo", this.state.imgNo);	// 로컬 스토리지에 현재 이미지 번호 저장.
		this.saveHistory(this.state.imgNo);	// 로컬스토리지에 내역 저장.
	},

	render: function() {
		
		this.commonAction();	// 공통 작업.

		var _imgDir = this.props.imgDir + this.state.imgNo + ".jpg";

	    return (
	    	<div className="wrap" id="home">
	    		<Swipeable onSwipedRight={this.swipedRight} onSwipedLeft={this.swipedLeft} >
					<img alt="praise" ref="praiseImg" src={_imgDir} onClick={this.touchImg} />
				</Swipeable>
			</div>
    	);
	},

	componentWillUnmount: function() {
		HeaderActions.getNumberFilteredPraise();
	},
});

module.exports = Home;