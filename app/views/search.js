angular
.module('stalker')
.controller('SearchCtrl', function ($scope, User) {
  $scope.isFresh = true;

  $scope.getURL = function () {
    var searchTerm = $scope.searchTerm;
    $scope.searchTerm = null;
    User.getUser(searchTerm)
    .then(function(data) {
      $scope.isGood = true;
      $scope.name = data.data.contactInfo.fullName
      $scope.websites = data.data.contactInfo.websites
      $scope.photos = data.data.photos
      $scope.profiles = data.data.socialProfiles
    })
    .catch(function(){
      $scope.isGood = false;
    })
    .finally(function(){
      $scope.isFresh = false;
    });
  };
});
