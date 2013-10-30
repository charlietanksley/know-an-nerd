angular.module("app").service("NerdListService", function($q, $http) {
  var nerds = function() {
    return $http.get('/api/nerds');
  };

  return {
    nerds: nerds
  };
});