var React = require('react/addons'),
	DateTime = require('date-time-string'),
	perf = React.addons.Perf;

var Tag = React.createClass({
	
	getInitialState: function() {
		return {
			list : {} 
		};
	},

	componentDidMount: function() {
		perf.start();
	},
	componentWillMount: function() {

		// var nowDate = DateTime.toDateString(),
	 //  		item = localStorage.getItem(nowDate),
	 //  		key = '',
	 //  		keyArr = [],
	 //  		listObj = {};

	 //  	for(var i=0; i<localStorage.length; i++) {

	 //  		key = localStorage.key(i);
	 //  		keyArr.push(key);
	 //  		listObj[key] = localStorage.getItem(key).split(",");
	 //  	}

	 //  	console.log(listObj);

		perf.stop();
//		perf.printExclusive();
		perf.printWasted();
//		perf.printDOM();
	},	
	render: function() {
	    return (
    		<div className="wrap"></div>
    	);
	}
});

module.exports = Tag;