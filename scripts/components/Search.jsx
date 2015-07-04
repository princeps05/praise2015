var React = require('react'),
    SearchBar = require('./SearchBar.jsx'),
    FilteredPraiseList = require('./FilteredPraiseList.jsx');

var Search = React.createClass({

    getInitialState: function() {

        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText) {
        this.setState({ filterText: filterText });
    },

	render: function() {

	    return (
    		<div className="wrap" id="search">
    			<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                <FilteredPraiseList filterText={this.state.filterText} />    			
			</div>
    	);
	}
});

module.exports = Search;