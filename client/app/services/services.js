angular.module('app.services', [])

.factory('Habits', ['$http', function($http) {

  var getAll = function(username) {
    return $http({
      method: 'GET',
      url: '/api/users/' + username
    })
    .then(function(resp) {
      return resp.data;
    });
  };

}]);
