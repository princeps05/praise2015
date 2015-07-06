var React = require('react/addons'),
	Reflux = require('reflux'),
	Actions = require('../actions/Actions'),
	Swipeable = require('react-swipeable'),
	DefaultValueObj = require('../utils/DefaultValueSetting');

var Home = React.createClass({

   	getDefaultProps: function() {
   		return DefaultValueObj.getDefaultHomeValueObj();
   	},

   	touchImg: function() {
   		var imgNode = React.findDOMNode(this.refs.praiseImg);
   		imgNode.className = (imgNode.className.indexOf('imageEnlargement') > -1)? '' : 'imageEnlargement';
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
			
			_imgNo = parseInt(sessionStorage.getItem("imgNo"));	// 로컬 스토리지에서 가져온 이미지 번호 저장.
			if(!_imgNo){	// 로컬 스토리지에도 없는 경우.
				_imgNo = parseInt(this.props.imgNo);	// 디폴트 이미지 번호 저장.				
			}

			history.replaceState(null, _imgNo, this.getPath(_imgNo)); // url 대체
		}

		this.setState({ imgNo : _imgNo });
  	},

	componentWillMount: function() {	// 첫 로딩시.		
		this.setParamImgNo(this.props.params.imgNo);
	},

	componentWillReceiveProps: function(nextProps) {	// 파라미터 업데이트 시.		
		this.setParamImgNo(nextProps.params.imgNo);
	},

	getPath: function(imgNo) {
		return location.href.indexOf("localhost") > -1? "/#/dure/" + imgNo : location.href.indexOf("dev") > -1? "/dev/#/dure/" + imgNo : "/praise/#/dure/" + imgNo;
	},

	setSwipeImgNo: function(direction) {

		if(this.hasImageEnlargementClass()) {
			return;
		}

		var _imgNo = (direction === "right")? parseInt(this.state.imgNo) -1 : parseInt(this.state.imgNo) +1;

		if(!this.isValidImg(_imgNo)) {
			_imgNo = (_imgNo > this.props.maxImgNo)? this.props.minImgNo : this.props.maxImgNo; 
		}

		history.pushState(null, _imgNo, this.getPath(_imgNo));

		this.setState({ imgNo : _imgNo });
	},

	swipedRight: function() {
		this.setSwipeImgNo("right");
	},

	swipedLeft: function() {
		this.setSwipeImgNo("left");
	},

	commonAction: function() {
		Actions.changeHeader(this.state.imgNo);	// 헤더에 저장 상태 변경.
		sessionStorage.setItem("imgNo", this.state.imgNo);	// 세션스토리지에 현재 이미지 번호 저장.
	},

	render: function() {
		
		if(this.state) {

			setTimeout(function () {
				this.commonAction();	// 공통 작업.
			}.bind(this), 1);
		    
		    return (
		    	<div className="wrap" id="home">
		    		<Swipeable onSwipedRight={this.swipedRight} onSwipedLeft={this.swipedLeft} >
						<img alt="praise" ref="praiseImg" src={this.props.imgDir + this.state.imgNo + ".jpg"} onClick={this.touchImg} />
					</Swipeable>
				</div>
	    	);
		}
		else {
			return false;
		}
	},

	componentWillUnmount: function() {	// 헤더 초기화	
		Actions.changeHeader();
	},
});

module.exports = Home;