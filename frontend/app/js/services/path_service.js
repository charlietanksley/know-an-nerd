angular.module("app").service('PathService', function() {
  var paths = {};

  paths.nerdListPath = "/nerds";
  paths.nerdQuizPath = "/quiz";

  return paths;
});