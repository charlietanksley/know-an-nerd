angular.module("app").filter('pictured', function() {
  return function(nerds) {
    var nerd;

    return _.reject(nerds, function(nerd) {
             if (KnowAnNerd.Image.isPlaceholder(nerd)) {
               return nerd;
             }
           });
  };
});