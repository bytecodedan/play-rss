'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'app.filters',
    'app.services',
//    'app.directives',
    'app.controllers'
  ])
.run(
  [          '$rootScope', '$state', '$stateParams', '$localStorage',
    function ($rootScope,   $state,   $stateParams,   $localStorage) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
  ]
)
.config(
  [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;

        $urlRouterProvider
            .otherwise('/feeds/automotive/top-news');
        $stateProvider
            .state('feeds', {
                abstract: true,
                url: '/feeds',
                templateUrl: 'assets/tpl/feeds.html'
            })

            // automotive
            .state('feeds.automotive', {
                abstract: true,
                url: '/automotive',
                templateUrl: 'assets/tpl/feeds-automotive.html'
            })
            .state('feeds.automotive.category', {
                url: '/{category:.*}',
                templateUrl: 'assets/tpl/feeds-automotive-category.html'
           })

           // huffington post
           .state('feeds.huffpost', {
               abstract: true,
               url: '/huffington-post',
               templateUrl: 'assets/tpl/feeds-huffpost.html'
           })
           .state('feeds.huffpost.category', {
               url: '/{category:.*}',
               templateUrl: 'assets/tpl/feeds-huffpost-category.html'
           })

          // huffington post
          .state('feeds.nfl', {
            abstract: true,
            url: '/nfl',
            templateUrl: 'assets/tpl/feeds-nfl.html'
          })
          .state('feeds.nfl.category', {
            url: '/{category:.*}',
            templateUrl: 'assets/tpl/feeds-nfl-category.html'
          })
    }
  ]
)
;