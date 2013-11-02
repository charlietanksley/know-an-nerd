angular.module("app").directive("nerdListPhotoOnly", function() {
  return {
    restrict: 'E',
    templateUrl: "partials/nerd_list_photo_only.html",
  };
});