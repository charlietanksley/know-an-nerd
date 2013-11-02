angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/nerds', {
    templateUrl: 'index.html',
    controller: 'NerdsIndexController',
    resolve: {
      nerds: function(NerdListService) {
        return NerdListService.all();
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/nerds' });
});
