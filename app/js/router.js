app.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'input.html',
    controller: 'WeatherController'
  });

  $routeProvider.when('/:latlong', {
    templateUrl: 'beach.html',
    controller: 'WeatherController'
  });

  $routeProvider.when('/stats/:latlong', {
    templateUrl: '/beach_stats.html',
    controller: 'WeatherController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
