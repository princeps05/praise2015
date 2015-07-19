var React = require('react');

var HeaderTitle = React.createClass({

	render: function() {

		if(this.props.praise) {

			return (
				<h5 className="text-center">
					<span id="imgNo">{this.props.praise.no}</span>
					<span>장</span>
					<span id="title">{this.props.praise.title}</span>
				</h5>
			);
		}
		else {
			return <h5 className="text-center">두레찬양</h5>
		}
	}
});

module.exports = HeaderTitle;