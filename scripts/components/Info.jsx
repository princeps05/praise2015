var React = require('react');

var Info = React.createClass({

	render: function() {
		
	    return (
    		<div className="wrap panel panel-default">
                <div className="panel-heading">두레찬양 3번째 버전 개발중</div>
                <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item">악보에서 스와이프로 이전장/다음장 보기</li>
                      <li className="list-group-item">띄어쓰기 없이 번호나 제목으로 검색</li>
                      <li className="list-group-item">상단 왼쪽에 뒤로가기</li>
                      <li className="list-group-item">상단 오른쪽에 V터치해서 내역 저장</li>
                      <li className="list-group-item">전반적인 UI 수정 중</li>
                      <li className="list-group-item">react + reflux + immutable</li> 
                    </ul>
                    
                    <div className="list-group">
                      <a className="list-group-item list-group-item-success">github 소스코드 업로드</a>
                      <a href="https://github.com/princeps05/praise2012/" target="2012" className="list-group-item">https://github.com/princeps05/praise2012/</a>
                      <a href="https://github.com/princeps05/praise2014/" target="2014" className="list-group-item">https://github.com/princeps05/praise2014/</a>
                      <a href="https://github.com/princeps05/praise2015/" target="2015" className="list-group-item">https://github.com/princeps05/praise2015/</a>
                    </div>
                </div>    
    		</div>
    	);
	}
});

module.exports = Info;