angular.module("app").controller('QuizController', function($scope, BookResource) {
  // $scope.books = BookResource.query();
  $scope.books = BookResource;
});