angular.module("app").controller('IndexController', function($scope, PathService) {
  $scope.nerdListPath = PathService.nerdListPath;
  $scope.nerdQuizPath = PathService.nerdQuizPath;
});