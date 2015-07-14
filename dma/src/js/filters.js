angular.module('movieFilters', []).filter('timeFilter', function() {
  return function(secs) {
    //Calculate the Hours
    var hours = Math.floor(secs / 3600);
    //Calculate minutes
    var mins = Math.floor((secs % 3600) / 60);
    //Return formatted time
    return hours + "hrs " + mins + "mins";
  };
});