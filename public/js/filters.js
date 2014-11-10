'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app.filters', [])
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  })
  .filter('dateInMillis', function() {
    return function(dateString) {
      var isoDate = new Date(dateString);
      if (dateString === undefined) return null; //isoDate = new Date('12/31/9999');
      return isoDate;
    };
  })
//  .filter('trusted', ['$sce', function ($sce) {
//    return function(url) {
//      return $sce.trustAsResourceUrl(url);
//    };
//  }])
;