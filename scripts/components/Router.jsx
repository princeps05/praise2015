var React = require('react/addons'),
    ReactRouter = require('react-router'),
    attachFastClick = require('fastclick'),

    Dure = require('./Dure.jsx'),
    Home = require('./Home.jsx'),
    PraiseWrapper = require('./PraiseWrapper.jsx'),
    Search = require('./Search.jsx'),
    PraiseRangeList = require('./PraiseRangeList.jsx'),
    Tag = require('./Tag.jsx'),
    Info = require('./Info.jsx'),

    Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute,
    NotFoundRoute = ReactRouter.NotFoundRoute,
    Redirect = ReactRouter.Redirect;

var routes = (
  
   <Route name="dure" path="/" handler={Dure}>
   
      <Route name="praiseRangeList" path="/rangeList/" handler={PraiseRangeList} />
         
      <Route name="praiseList" path="/list/:startNo?/:endNo?/" handler={PraiseWrapper} />

      <Route name="search" path="/search/" handler={Search} />
      <Route name="home" path="/dure/:imgNo?" handler={Home} />

      <Route name="tag" path="/tag/" handler={Tag} />
      <Route name="info" path="/info/" handler={Info} />

      <DefaultRoute handler={Home} />
      <NotFoundRoute handler={Home} />
      <Redirect from="/" to="home" />

   </Route>
);

ReactRouter.run(routes, function (Handler) {

   attachFastClick(document.body);

   React.render(<Handler />, document.body);
});