angular.module("app").filter('notPictured', function() {
  return function(nerds) {
    var nerd;

    return _.select(nerds, function(nerd) {
             if (KnowAnNerd.Image.isPlaceholder(nerd)) {
               return nerd;
             }
           });
  };
});