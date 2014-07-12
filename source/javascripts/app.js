var app = angular.module('beachday',[]);

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/yah', {
//         templateUrl: 'yah',
//         controller: 'mainController'
//       }).
//       when('/nah', {
//         templateUrl: 'nah',
//         controller: 'mainController'
//       }).
//       otherwise({
//         redirectTo: 'brah'
//       });
//   }]);

//jQuery
$(document).ready(function() {
  //splash 
  function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -0 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};
});