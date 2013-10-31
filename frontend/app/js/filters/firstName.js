angular.module("app").filter('firstName', function() {
  return function(nerds) {
    return KnowAnNerd.Sort.firstName(nerds);
  };
});