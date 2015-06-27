var React = require('react'),
	Reflux = require('reflux'),
    HeaderStore = require('../stores/HeaderStore');

var HeaderTitle = React.createClass({
	
	mixins: [Reflux.connect(HeaderStore, 'praise')],

	render: function() {
		
		if(this.state.praise) {
			return (
				<h5 className="text-center">
					<span id="imgNo">{this.state.praise.no}</span>
					<span>장</span>
					<span id="title">{this.state.praise.title}</span>
				</h5>
			);
		}
		else {
			return <h5 className="text-center">두레교회</h5>
		}

	}
});

module.exports = HeaderTitle;