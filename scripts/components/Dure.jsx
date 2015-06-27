'use strict';

var React = require('react'),
    RouteHandler = require("react-router").RouteHandler,
    Header = require('./Header.jsx'),
    FooterNav = require("./FooterNav.jsx");

var Dure = React.createClass({

  render: function () {
    return (
      <div>
      	<Header />
        <RouteHandler />
        <FooterNav />
      </div>
    );
  }
});

module.exports = Dure;