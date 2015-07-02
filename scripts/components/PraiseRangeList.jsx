var React = require('react/addons'),
    Reflux = require('reflux'),
    PraiseStore = require('../stores/PraiseStore'),
    Actions = require('../actions/Actions'),
    PureRenderMixin = React.addons.PureRenderMixin,
    PraiseRangeOne = require('./PraiseRangeOne.jsx'),
    DefaultValueObj = require('../utils/DefaultValueSetting');

var PraiseRangeList = React.createClass({

  mixins: [PureRenderMixin, Reflux.connect(PraiseStore, 'praiseRangeList')],

  getDefaultProps: function() {
    return DefaultValueObj.getDefaultRangeSize();
  },

  componentWillMount: function() {
    Actions.getPraiseRangeList(this.props.rangeSize);
  },

  render: function() {

    if(this.state.praiseRangeList) {
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