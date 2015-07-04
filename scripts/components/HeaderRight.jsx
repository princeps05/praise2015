var React = require('react'),
    Reflux = require('reflux'),
    Actions = require('../actions/Actions');

var HeaderRight = React.createClass({

  saveHistory: function() {

    if(React.findDOMNode(this.refs.history).className.indexOf('hasPraise') > -1) {
      return;
    }

    Actions.saveHistoryPraise(this.props.praise.no);
  },

	render: function() {

    if(this.props.praise) {

      var _class = this.props.praise.hasPraise? "icon icon-check history hasPraise" : "icon icon-check history";
  		
  	  return (<span className={_class} ref='history' onClick={this.saveHistory}></span>);
    }
    else {
      return false;
    }
	}
});

module.exports = HeaderRight;