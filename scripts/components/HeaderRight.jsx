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

  pageRefresh: function() {
    location.reload();
  },

	render: function() {
    
    if(this.props.praise) {

      var _class = this.props.praise.hasPraise? "icon icon-check history hasPraise" : "icon icon-check history";
   	  return (<span className={_class} ref='history' onClick={this.saveHistory}></span>);
    }
    else {
      return (<span className='icon icon-loop refresh' onClick={this.pageRefresh}></span>);
    }
	}
});

module.exports = HeaderRight;