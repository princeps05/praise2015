var React = require('react'),
	HeaderTitle = require('./HeaderTitle.jsx');

var Header = React.createClass({
	
	goBack: function() {
		history.back();
	},

	render: function() {
		
		return (
			<div className="navbar-top">
				<a className="text-center pull-left backBtn" onClick={this.goBack}>
					<span className="icon icon-undo"></span>
				</a>
				<HeaderTitle />
			</div>
		);
	}
});

module.exports = Header;