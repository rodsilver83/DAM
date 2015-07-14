var moviesControllers = angular.module('moviesControllers', []);

moviesControllers.controller('MovieListCtrl', ['$scope', 'Movies',
  function ($scope, Movies) {
    $scope.movies = Movies.query();
    $scope.orderProp = 'age';
  }]);

moviesControllers.controller("MovieDetailCtrl", ['$scope','$routeParams','Movies',
function($scope,$routeParams,Movies){
    $scope.movie = Movies.get({movieId: $routeParams.movieId},function(movie){
    })
  }]);