angular.module("app").directive("nerdListNameOnly", function() {
  return {
    restrict: 'E',
    templateUrl: "partials/nerd_list_name_only.html",
  };
});