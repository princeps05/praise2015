var React = require('react/addons'),
    Reflux = require('reflux'),
    PraiseStore = require('../stores/PraiseStore'),
    PraiseActions = require('../actions/PraiseActions'),
    PureRenderMixin = React.addons.PureRenderMixin,
    PraiseRangeOne = require('./PraiseRangeOne.jsx');

var PraiseRangeList = React.createClass({

  mixins: [PureRenderMixin, Reflux.connect(PraiseStore, 'praiseRangeList')],

  getDefaultProps: function() {

    return { 
      rangeSize: 100
    };
  },

  componentWillMount: function() {
    PraiseActions.getPraiseRangeList(this.props.rangeSize);
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