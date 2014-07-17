var app = angular.module('beachday',[
  'ngRoute',
  'ngAnimate'
  ]);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    // 
    $routeProvider.
      when('/', {
        templateUrl: 'nah',
      }).
      when('/nah', {
        templateUrl: 'nah',
      }).
      when('/yah', {
        templateUrl: 'yah',
      }).
      when('/yah_stats', {
        templateUrl: 'yah_stats',
      }).
      when('/nah_stats', {
        templateUrl: 'nah_stats',
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);

$( document ).ready(function() {
    function resizesplash(divId) {
      var heights = window.innerHeight;
      //subtract any footer/header height to ensure a proper fit
      document.getElementById(divId).style.height = heights -0 + "px";
  }
  //resize element as user resizes window
  resizesplash();
  window.onresize = function() {
      resizesplash(divId);
};


// //jQuery
// function resize (divId) {
//   //splash screen resizes to fit window
//   function resizesplash() {
//       var heights = window.innerHeight;
//       //subtract any footer/header height to ensure a proper fit
//       document.getElementById(divId).style.height = heights -0 + "px";
//   }
//   //resize element as user resizes window
//   resizesplash();
//   window.onresize = function() {
//       resizesplash();
// };
// }

resizesplash("#splash");
resizesplash("#nah-splash");
});