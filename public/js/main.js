angular
  .module('persons', [])
  .controller('PersonsCtrl', function ($scope, User) {
    $scope.getURL = function () {
      var searchTerm = $scope.searchTerm;
      $scope.searchTerm = null;
      User.getUser(searchTerm)
      .success(function(data) {
          $scope.name = data.contactInfo.fullName
          $scope.websites = data.contactInfo.websites
          $scope.photos = data.photos
          $scope.profiles = data.socialProfiles
      });
    };
  });

  angular
  .module('stalker', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {url:'/', templateUrl:'/views/home.html'})
        .state('search', {url:'/search', templateUrl:'/views/search.html', controller:'SearchCtrl'});
    });
