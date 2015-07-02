var React = require('react/addons'),
    Reflux = require('reflux'),
    HistoryStore = require('../stores/HistoryStore'),
    Actions = require('../actions/Actions'),
    PureRenderMixin = React.addons.PureRenderMixin,
    HistoreOne = require('./HistoryOne.jsx');

var HistoryList = React.createClass({

  mixins: [PureRenderMixin, Reflux.connect(HistoryStore, 'historyDateList')],

  componentWillMount: function() {
    Actions.loadHistoryDateList();
  },

  render: function() {

    if(this.state.historyDateList) {
      return (
        <div className="wrap" id="history">  
          <div className="list-group">
            {
              this.state.historyDateList.map(function(date, index) {
                return <HistoreOne key={index} date={date} />;
              })
            }
          </div>
        </div>
      );
    }
    else  {
      return false;
    }    
  }

});   

module.exports = HistoryList;