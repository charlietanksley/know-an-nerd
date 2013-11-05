angular.module("app").directive("nerdName", function($interpolate, $compile) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: "partials/nerd_name.html",
    link: function(scope, element, attrs) {
      scope.showPhoto = function() {
        var nerd = $interpolate(attrs.nerd)(scope);
        var html = "<nerd-photo data-nerd='{{nerd}}'></nerd-photo>";
        element.replaceWith($compile(html)(scope));
      };
    }
  };
});
