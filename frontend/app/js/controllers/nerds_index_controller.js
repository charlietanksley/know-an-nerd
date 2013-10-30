angular.module("app").controller("NerdsIndexController", function($scope, nerds) {
  $scope.nerds = nerds.data;
});
