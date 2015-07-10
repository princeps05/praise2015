var React = require('react');

var Info = React.createClass({

  componentWillMount: function() {
    Kakao.cleanup();    
  },

  componentDidMount: function(prevProps, prevState) {

    Kakao.init('14b6a997dfd278344236da1878d39837');
    Kakao.Link.createTalkLinkButton({
      container: React.findDOMNode(this.refs.kakao),
      image: {
        src: 'http://vespasiani.cdn3.cafe24.com/img/dure.jpg',
        width: '300',
        height: '200'
      },
      webButton: {
        text: '두레찬양',
        url: 'http://xn--9d0bt6kv7c355b.com/praise/'
      }
    });  
  },

	render: function() {
    
	    return (
    		<div className="wrap panel panel-default">

          <div className="panel-body">

            <ul className="list-group">
              <a id="kakao-link-btn" ref="kakao"><img className="kakao" src="http://vespasiani.cdn3.cafe24.com/img/kakao.png" /></a>
              <li className="list-group-item list-group-item-info">두레찬양 모바일 웹</li>
            </ul>

            <ul className="list-group">
              <li className="list-group-item">악보에서 좌/우드래그로 이전/다음장 보기</li>
              <li className="list-group-item">악보에서 상단 오른쪽에 V터치해서 내역 저장</li>
              <li className="list-group-item">인터넷 사용정보 삭제 시 내역 초기화</li>
              <li className="list-group-item">전반적인 UI 및 내부 구조 수정 중</li>
              <li className="list-group-item">react + reflux + immutable</li>
            </ul>
            
            <div className="list-group">
              <li className="list-group-item list-group-item-success">github 소스코드 업로드</li>
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