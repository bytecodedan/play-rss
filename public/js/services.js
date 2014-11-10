'use strict';

/* Services */


angular.module('app.services', [])

.factory('AutoBlogFeeds', ['$resource', function($resource) {
  return $resource('http://localhost:9000/feeds/autoblog/:category', { make: "@category" }, {})
}])

.factory('HuffPostFeeds', ['$resource', function($resource) {
  return $resource('http://localhost:9000/feeds/huffpost/:category', { make: "@category" }, {})
}])
;