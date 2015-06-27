var React = require('react'),
	Link = require('react-router').Link;

var PraiseRangeOne = React.createClass({
	
	render: function() {

	    return (
			<Link to="praiseList" params={{startNo: this.props.praiseRange.startNo, endNo: this.props.praiseRange.endNo}} className="list-group-item">		  
			   	<span className="badge pull-left startNo">{this.props.praiseRange.startNo}</span>
			   	<span className="pull-left dash">~</span>
			  	<span className="badge pull-left endNo">{this.props.praiseRange.endNo}</span>
			   	<span className="pull-right icon-chevron_right"></span>
		   	</Link>
    	);
	}
});

module.exports = PraiseRangeOne;