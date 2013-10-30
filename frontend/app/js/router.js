angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'IndexController'
  });

  $routeProvider.when('/nerds', {
    templateUrl: 'nerds/index.html',
    controller: 'NerdsIndexController',
    resolve: {
      nerds: function(NerdListService) {
        return NerdListService.all();
      }
    }
  });

  $routeProvider.when('/quiz', {
    templateUrl: 'quiz.html',
    controller: 'QuizController',
    resolve: {
      BookResource : function(BookService) {
        return BookService.getBooks();
      }
    }
    });

  // $routeProvider.when('/home', {
  //   templateUrl: 'home.html',
  //   controller: 'HomeController'
  // });

  // $routeProvider.when('/list-of-books', {
  //   templateUrl: 'books.html',
  //   controller: 'BooksController'
  //   // uncomment if you want to see an example of a route that resolves a request prior to rendering
  //   // resolve: {
  //   //   books : function(BookService) {
  //   //     return BookService.get();
  //   //   }
  //   // }
  // });

  $routeProvider.otherwise({ redirectTo: '/' });

});
