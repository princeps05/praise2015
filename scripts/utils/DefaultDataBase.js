'use strict';

var Immutable = require('immutable'),
    DATABASEURL = require('../../data.json');

var DefaultDataBase = { // store 로 바꿀 수 있음.
   
   getDefaultDataBase: function() {
      return Immutable.List(DATABASEURL);
   }
};

module.exports = DefaultDataBase;