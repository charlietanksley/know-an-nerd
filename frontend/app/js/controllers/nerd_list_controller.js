angular.module("app").controller("NerdListController", function($scope, nerds) {
  $scope.nerds = nerds.data;
});
