angular.module("app").controller("NerdNamesController", function($scope, nerds) {
  var data = _.map(nerds.data, function(nerd) {
               return _.pick(nerd, 'name');
             });

  $scope.nerds = data;
});
