'use strict';

/* Services */


angular.module('app.services', [])

.factory('AutoBlogFeeds', ['$resource', function($resource) {
  return $resource('/feeds/autoblog/:category', { make: "@category" }, {})
}])

.factory('HuffPostFeeds', ['$resource', function($resource) {
  return $resource('/feeds/huffpost/:category', { make: "@category" }, {})
}])

.factory('NFLFeeds', ['$resource', function($resource) {
  return $resource('/feeds/nfl/:category', { make: "@category" }, {})
}])
;