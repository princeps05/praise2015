var React = require('react'),
	Link = require('react-router').Link;

var FooterNav = React.createClass({
	
	render: function() {
		
	    return (
			<div className="navbar-bottom">

				<Link to="praiseRangeList" className="text-center pull-left list">
	    			<span className="icon icon-list"></span>
	    			<span> 목차</span>
	    		</Link>

				<Link to="search" className="text-center pull-left search">
	    			<span className="icon icon-search"></span>
	    			<span> 검색</span>
	    		</Link>

				<Link to="home" className="text-center pull-left home">
	    			<span className="icon icon-star_outline"></span>
	    			<span> 악보</span>
	    		</Link>

				<Link to="historyList" className="text-center pull-left history">	    		
	    			<span className="icon icon-bookmark_outline"></span>
	    			<span> 내역</span>
	    		</Link>

				<Link to="info" className="text-center pull-left info">	    		
	    			<span className="icon icon-info_outline"></span>
	    			<span> 정보</span>
	    		</Link>
	    		
	    	</div>
	    );
	}
});

module.exports = FooterNav;