var app = angular.module('beachday',[
  'ngRoute',
  'ngAnimate'
  ]);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    // 
    $routeProvider.
      when('/', {
        templateUrl: 'yah',
      }).
      when('/stats', {
        templateUrl: 'stats',
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