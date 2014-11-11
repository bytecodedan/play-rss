'use strict';

/* Controllers */

angular.module('app.controllers', ['ngCookies'])
  .controller('MainCtrl', ['$rootScope', '$scope', '$localStorage', '$sce',
    function(               $rootScope,   $scope,   $localStorage,   $sce) {

    // config
    $scope.app = {
      name: 'Feedster',
      version: '1.1.1'
    };

    $scope.sanitize = function(html) {
      return $sce.trustAsHtml(html);
    };

  }])

  .controller('FeedsAutomotiveCtrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.topics = [
      {name: 'top-news', formalName: 'Top News'},
      {name: 'sema', formalName: 'SEMA'}
    ];
    $scope.makeTopics = [
      {name: 'acura', formalName: 'Acura'},
      {name: 'audi', formalName: 'Audi'},
      {name: 'bmw', formalName: 'BMW'},
      {name: 'bugatti', formalName: 'Bugatti'},
      {name: 'buick', formalName: 'Buick'},
      {name: 'cadillac', formalName: 'Cadillac'},
      {name: 'chevrolet', formalName: 'Chevrolet'},
      {name: 'chrysler', formalName: 'Chrysler'},
      {name: 'dodge', formalName: 'Dodge'},
      {name: 'ferrari', formalName: 'Ferrari'},
      {name: 'fiat', formalName: 'Fiat'},
      {name: 'fisker', formalName: 'Fisker'},
      {name: 'ford', formalName: 'Ford'},
      {name: 'gm', formalName: 'GM'},
      {name: 'gmc', formalName: 'GMC'},
      {name: 'honda', formalName: 'Honda'},
      {name: 'hummer', formalName: 'Hummer'},
      {name: 'hyundai', formalName: 'Hyundai'},
      {name: 'infiniti', formalName: 'Infiniti'},
      {name: 'jaguar', formalName: 'Jaguar'},
      {name: 'jeep', formalName: 'Jeep'},
      {name: 'kia', formalName: 'Kia'},
      {name: 'lamborghini', formalName: 'Lamborghini'},
      {name: 'lexus', formalName: 'Lexus'},
      {name: 'lincoln', formalName: 'Lincoln'},
      {name: 'lotus', formalName: 'Lotus'},
      {name: 'maserati', formalName: 'Maserati'},
      {name: 'mazda', formalName: 'Mazda'},
      {name: 'mclaren', formalName: 'McLaren'},
      {name: 'mercedes-benz', formalName: 'Mercedes-Benz'},
      {name: 'mini', formalName: 'Mini'},
      {name: 'mitsubishi', formalName: 'Mitsubishi'},
      {name: 'nissan', formalName: 'Nissan'},
      {name: 'pontiac', formalName: 'Pontiac'},
      {name: 'porsche', formalName: 'Porsche'},
      {name: 'ram', formalName: 'Ram'},
      {name: 'rolls-royce', formalName: 'Rolls-Royce'},
      {name: 'saturn', formalName: 'Saturn'},
      {name: 'scion', formalName: 'Scion'},
      {name: 'smart', formalName: 'Smart'},
      {name: 'spyker', formalName: 'Spyker'},
      {name: 'subaru', formalName: 'Subaru'},
      {name: 'suzuki', formalName: 'Suzuki'},
      {name: 'tesla', formalName: 'Tesla'},
      {name: 'toyota', formalName: 'Toyota'},
      {name: 'volkswagen', formalName: 'Volkwagen'},
      {name: 'volvo', formalName: 'Volvo'}
    ];
}])

  .controller('FeedsAutomotiveCategoryCtrl', ['$scope', '$stateParams', '$sce', 'AutoBlogFeeds', function($scope, $stateParams, $sce, AutoBlogFeeds) {
    if ($stateParams.category !== 'top-news') {
      $scope.feed = AutoBlogFeeds.get({category: $stateParams.category});
    } else {
      $scope.feed = AutoBlogFeeds.get();
    }
  }])

  .controller('FeedsHuffPostCtrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.topic = [
      {name: 'business', formalName: 'Business'},
      {name: 'comedy', formalName: 'Comedy'},
      {name: 'education', formalName: 'Education'},
      {name: 'entertainment', formalName: 'Entertainment'},
      {name: 'huffpost-home', formalName: 'Home'},
      {name: 'parents', formalName: 'Parents'},
      {name: 'politics', formalName: 'Politics'},
      {name: 'religion', formalName: 'Religion'},
      {name: 'science', formalName: 'Sience'},
      {name: 'sports', formalName: 'Sports'}
    ];
  }])

  .controller('FeedsHuffPostCategoryCtrl', ['$scope', '$stateParams', '$sce', 'HuffPostFeeds', function($scope, $stateParams, $sce, HuffPostFeeds) {
    if ($stateParams.category !== 'top-news') {
      $scope.feed = HuffPostFeeds.get({category: $stateParams.category});
    } else {
      $scope.feed = HuffPostFeeds.get();
    }
  }])


  .controller('FeedsNFLCtrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.topic = [
      {name: 'home', formalName: 'Top News'},
      {name: 'gamehighlightsVideo', formalName: 'Top Game'}
    ];
  }])

  .controller('FeedsNFLCategoryCtrl', ['$scope', '$stateParams', '$sce', 'NFLFeeds', function($scope, $stateParams, $sce, NFLFeeds) {
    if ($stateParams.category !== 'top-news') {
      $scope.feed = NFLFeeds.get({category: $stateParams.category});
    } else {
      $scope.feed = NFLFeeds.get();
    }
  }])

 ;