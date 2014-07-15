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

//jQuery
$(window).load(function() {
  //splash screen resizes to fit window
  function resizesplash() {
      var heights = window.innerHeight;
      //subtract any footer/header height to ensure a proper fit
      document.getElementById("splash").style.height = heights -0 + "px";
  }
  //resize element as user resizes window
  resizesplash();
  window.onresize = function() {
      resizesplash();
};
});