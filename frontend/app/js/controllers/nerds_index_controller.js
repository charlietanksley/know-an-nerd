angular.module("app").controller("NerdsIndexController", function($scope, nerds, $routeParams) {
  $scope.nerds = nerds.data;
});
