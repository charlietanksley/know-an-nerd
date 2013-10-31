angular.module("app").controller("NerdsIndexController", function($scope, nerds, $routeParams, $filter) {
  var filter = function(data) {
    var actualFilter,
        selected = $routeParams['filter'];

    if (selected === 'firstName') {
      actualFilter = 'firstName';
    } else if (selected === 'lastName') {
      actualFilter = 'lastName';
    } else {
      actualFilter = 'filter';
    }

    return $filter(actualFilter)(data);
  };

  $scope.nerds = filter(nerds.data);
});
