angular.module("app").filter('pictured', function() {
  return function(nerds) {
    return _.reject(nerds, KnowAnNerd.Image.onlyPlaceholders, KnowAnNerd.Image);
  };
});