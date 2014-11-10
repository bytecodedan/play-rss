'use strict';

/* Services */


angular.module('app.services', [])

.factory('AutoBlogFeeds', ['$resource', function($resource) {
  return $resource('http://play-rss.herokuapp.com:9000/feeds/autoblog/:category', { make: "@category" }, {})
}])

.factory('HuffPostFeeds', ['$resource', function($resource) {
  return $resource('http://play-rss.herokuapp.com:9000/feeds/huffpost/:category', { make: "@category" }, {})
}])
;