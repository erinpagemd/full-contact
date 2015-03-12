angular.module('stalker')
.factory('User', function($http){

  function getUser(email){
    var url = 'https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=a5300a1042a39363';
    return $http.get(url);
  }

  return {getUser:getUser};
});
