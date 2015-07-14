var movieApp = angular.module('movieApp', [
  'ngRoute',
  'moviesControllers',
  'moviesServices',
  'movieFilters',
  'ngAnimate',
  'ui.bootstrap'
]);

movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'templates/movie-list.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: 'templates/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);