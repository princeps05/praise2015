'use strict';

/* global -Promise */
var Promise = global.Promise || require('es6-promise').Promise;

var DATABASEURL = 'data.json';
var database = null;


function setAllPraiseList() {

   return new Promise(function(resolve, reject) {
      
      if (database) {
         resolve(database.praiseList);
         return;
      }

      var request = new XMLHttpRequest();
      request.open('GET', DATABASEURL);
      request.onload = function() {
         if (request.status >= 200 && request.status < 400) {
            database = JSON.parse(request.responseText);
            resolve(database.praiseList);
         } else {
            reject(Error('Data not found'));
         }
      };

      request.onerror = function() {
         reject(Error('Network error'));
      };

      request.send();
   });
}

function getPraiseList(startNo, endNo) {

   return setAllPraiseList().then(function(data) {
      return data.slice(startNo -1, endNo);
   });   
}

function getPraiseRangeList() {

   return setAllPraiseList().then(function(data) {
      
      var praiseRangeRowList = [],
          praiseRangeRow = {},
          length = data.length;

      for(var i=1; i<=length / 100 +1; i++)  {
      
         praiseRangeRow.endNo = i * 100;
         praiseRangeRow.startNo = praiseRangeRow.endNo - 99;
         
         if(praiseRangeRow.endNo > length)   {
            praiseRangeRow.endNo = length;
         }
         
         praiseRangeRowList.push(praiseRangeRow);
         praiseRangeRow = {};
      }

      return praiseRangeRowList;
   });
}


function getPraiseTitle(no) {

   return setAllPraiseList().then(function(data) {

      var title = '';

      data.some(function(obj){

         if(obj.no === parseInt(no)) {
            title = obj.title;
            return true;
         }
      });

      return title;
   });
}

function getAllPraiseList() {
   return database;
}

var Utility = {

   setAllPraiseList: setAllPraiseList,
   
   getPraiseList: getPraiseList,
   getPraiseRangeList: getPraiseRangeList,
   getPraiseTitle : getPraiseTitle,

   getAllPraiseList : getAllPraiseList

};

module.exports = Utility;