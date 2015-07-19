var React = require('react/addons'),
    Reflux = require('reflux'),
    PraiseStore = require('../stores/PraiseStore'),
    Actions = require('../actions/Actions'),
    PraiseRangeOne = require('./PraiseRangeOne.jsx'),
    DefaultValueObj = require('../utils/DefaultValueSetting');

var PraiseRangeList = React.createClass({

  mixins: [Reflux.listenTo(Actions.getPraiseRangeList.completed, 'getPraiseRangeList')],

  getDefaultProps: function() {
    return DefaultValueObj.getDefaultRangeSize();
  },

  getPraiseRangeList: function(praiseRangeList) {
    this.setState({ 'praiseRangeList': praiseRangeList });
  },

  componentWillMount: function() {
    Actions.getPraiseRangeList(this.props.rangeSize);
  },

  render: function() {

    if(this.state && this.state.praiseRangeList.size) {
        return (
          <div className="wrap" id="list">  
            <div className="list-group">
              {
                this.state.praiseRangeList.map(function(praiseRange){
                  return (<PraiseRangeOne key={praiseRange.startNo} praiseRange={praiseRange} />);
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

module.exports = PraiseRangeList;