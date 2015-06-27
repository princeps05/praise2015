var React = require('react'),
    SearchBar = require('./SearchBar.jsx'),
    SearchWrapper = require('./SearchWrapper.jsx');

var Search = React.createClass({

	render: function() {

	    return (
    		<div className="wrap" id="search">
    			<SearchBar />
                <SearchWrapper />    			
			</div>
    	);
	}
});

module.exports = Search;