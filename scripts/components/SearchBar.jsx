var React = require('react'),
	Actions = require('../actions/Actions');

var SearchBar = React.createClass({

    handleChange: function() {
        this.props.onUserInput( React.findDOMNode(this.refs.filterText).value.trim() );    	
    },	
	
    removeTextFilter: function() {

    	var _filterText = React.findDOMNode(this.refs.filterText);
    	if(_filterText.value.trim()) {
	    	_filterText.value = '';
	    	this.props.onUserInput();
    	}
    },

	render: function() {             console.log('SearchBar render');

	    return (
		    <div className="input-group searchText">
		      	<input type="search" className="form-control" ref="filterText" onChange={this.handleChange} placeholder="번호나 제목을 입력하세요." />
				<span className="b_clear icon icon-highlight_remove" onClick={this.removeTextFilter}></span>
			</div>
    	);
	}
});

module.exports = SearchBar;