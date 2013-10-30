angular.module("app").controller("NerdsIndexController", function($scope, nerds, NerdCacheService) {
  var unknownNerds;

  unknownNerds = function() {
    var ids,
        nerd,
        knownNerds = $scope.knownNerds;

    console.log(nerds);
    ids = _.pluck(knownNerds, 'id');
    console.log(ids);
    return _.reject($scope.allNerds, function(nerd) {
             if (_.contains(ids, nerd.id)) {
               return nerd;
             }
           });
  };

  $scope.allNerds = nerds.data;
  $scope.knownNerds = NerdCacheService.getKnown();
  $scope.nerds = unknownNerds();
});
