var React = require('react'),
	PraiseActions = require('../actions/PraiseActions');

var SearchBar = React.createClass({

    handleChange: function() {
    	PraiseActions.getTextFilteredPraiseList(React.findDOMNode(this.refs.filterText).value.trim());
    },	

    componentWillMount: function() {
    	PraiseActions.getTextFilteredPraiseList();
    },
	
	render: function() {

	    return (
		    <div className="input-group searchText">
		      	<input type="search" className="form-control" ref="filterText" onChange={this.handleChange} placeholder="띄어쓰기 없이 번호나 제목을 입력하세요." />
			</div>
    	);
	}
});

module.exports = SearchBar;