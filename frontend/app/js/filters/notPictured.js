angular.module("app").filter('notPictured', function() {
  return function(nerds) {
    return _.select(nerds, KnowAnNerd.Image.onlyPlaceholders, KnowAnNerd.Image);
  };
});