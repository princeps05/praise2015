var React = require('react'),
	Link = require('react-router').Link;

var PraiseOne = React.createClass({
	
	render: function() {
		
	    return (	    	
		   	<Link to="home" params={{imgNo: this.props.praise.no}} className="list-group-item">
		   		<span className="badge pull-left">{this.props.praise.no}</span>
		   		<span className="title">{this.props.praise.title}</span>		
	    	</Link>
    	);
	}
});

module.exports = PraiseOne;