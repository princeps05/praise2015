var React = require('react');

var Info = React.createClass({

	render: function() {
		
	    return (
    		<div className="wrap">
    			두레찬양 3번째 버전 개발중.
    			
                <h5>yeoman + grunt + bower + react</h5>
                <br/>
                
                <h5>악보에서 이전장/다음장 버튼 대신 스와이프로 대체.</h5>
    			<h5>목차 추가.</h5>
    			<h5>검색에서 곡목록 무한스크롤 적용.</h5>
    			<h5>상단에 뒤로가기 추가.</h5>
    			<br/>
                
                <h5>gulp + webpack + react + reflux + immutable로 전환 중.</h5>
                <h5>UI 수정/ 애니메이션 적용/ github 업로드 예정.</h5>
                <br/>
                
    		</div>
    	);
	}
});

module.exports = Info;