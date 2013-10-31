angular.module("app").directive("nerdNavigation", function() {
  return {
    restrict: 'E',
    templateUrl: "partials/nerd_navigation.html",
    link: function(scope, element, attrs) {
      var filterOptions = [
        { name: 'first name', filter: 'firstName' },
        { name: 'last name', filter: 'lastName' }
      ];

      scope.filters = filterOptions;
    }
  };
});