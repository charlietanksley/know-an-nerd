angular.module("app").filter('lastName', function() {
  return function(nerds) {
    return KnowAnNerd.Sort.lastName(nerds);
  };
});