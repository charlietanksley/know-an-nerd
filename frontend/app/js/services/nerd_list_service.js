angular.module("app").service("NerdListService", function($q, $http) {
  var all;

  all = function() {
    return $http.get('/api/nerds');
  };

  return {
    all: all
  };
});