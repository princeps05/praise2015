var React = require('react'),
	Link = require('react-router').Link;

var HistoryOne = React.createClass({
	
	render: function() {
		
	    return (
	    	<Link to="dateList" params={{date: this.props.date}} className="list-group-item">		   	
		   		<span className="badge pull-left">{this.props.date}</span>
		   		<span className="right icon-keyboard_arrow_right"></span>
	    	</Link>
    	);
	}
});

module.exports = HistoryOne;