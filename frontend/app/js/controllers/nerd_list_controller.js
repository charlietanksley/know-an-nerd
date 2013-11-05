angular.module("app").controller("NerdListController", function($scope, nerds) {
  $scope.nerds = listFunctions.pairize(nerds.data);
});
