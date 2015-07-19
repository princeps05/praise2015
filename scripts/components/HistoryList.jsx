var React = require('react/addons'),
    Reflux = require('reflux'),
    HistoryStore = require('../stores/HistoryStore'),
    Actions = require('../actions/Actions'),
    HistoreOne = require('./HistoryOne.jsx');

var HistoryList = React.createClass({

  mixins: [Reflux.listenTo(Actions.loadHistoryDateList.completed, 'getHistoryDateList')],

  getHistoryDateList: function(historyDateList) {
    this.setState({ 'historyDateList': historyDateList });
  },

  componentWillMount: function() {
    Actions.loadHistoryDateList();
  },

  render: function() {

    if(this.state) {
    
      if(this.state.historyDateList.size) {

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
      else {
        return (
          <div className="alert alert-success noHistory text-center">저장한 찬양이 없습니다.</div>
        )
      }  
    }
    else {
      return false;
    }
  }

});   

module.exports = HistoryList;