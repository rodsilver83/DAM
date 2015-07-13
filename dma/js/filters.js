angular.module('movieFilters', []).filter('timeFilter', function() {
  return function(secs) {
    var hours = Math.floor(secs / 3600);
    var mins = Math.floor((secs % 3600) / 60);
    return hours + "hrs " + mins + "mins";
  };
});