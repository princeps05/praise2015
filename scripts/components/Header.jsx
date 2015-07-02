var React = require('react'),
	Reflux = require('reflux'),
    HeaderStore = require('../stores/HeaderStore'),
	HeaderTitle = require('./HeaderTitle.jsx'),
	HeaderRight = require('./HeaderRight.jsx');

var Header = React.createClass({

	mixins: [Reflux.connect(HeaderStore, 'praise')],

	goBack: function() {
		history.back();
	},

	render: function() {
	
		return (
			<div className="navbar-top">
				<span className="icon icon-undo pull-left backBtn" onClick={this.goBack}></span>
				<HeaderTitle praise={this.state.praise} />
				<HeaderRight praise={this.state.praise} />
			</div>
		);
	}
});

module.exports = Header;