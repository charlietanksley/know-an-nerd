angular.module("app").directive("nerdPhoto", function($interpolate, $compile) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: "partials/nerd_photo.html",
    link: function(scope, element, attrs) {
      scope.showName = function() {
        var nerd = $interpolate(attrs.nerd)(scope);
        var html = "<nerd-name data-nerd='{{nerd}}'></nerd-name>";
        element.replaceWith($compile(html)(scope));
      };
    }
  };
});
