angular
  .module('persons', [])
  .controller('PersonsCtrl', function ($scope, $http) {
    $scope.getURL = function () {
      var searchTerm = $scope.searchTerm;
      $scope.searchTerm = null;

      var url = 'https://api.fullcontact.com/v2/person.json?email='
      + searchTerm
      + '&apiKey=a5300a1042a39363';

      $http.get(url)
        .success(function(data) {
          $scope.name = data.contactInfo.fullName
          $scope.websites = data.contactInfo.websites
          $scope.photos = data.photos
          $scope.profiles = data.socialProfiles
        })
        .error(function(data) {
          console.log('error in getURL ' + data);
        });
    };
  });
