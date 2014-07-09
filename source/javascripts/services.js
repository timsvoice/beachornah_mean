app.factory('WeatherData', function($http) {

    var results = [];

    this.initialize = function() {
      //API requires location
      
      var location = "40.560624,-73.870182";
      var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";

      $http.get('http://api.worldweatheronline.com/free/v1/marine.ashx?format=json&q=' + location + '&key=' + $scope.apiKey).success(function(data) {
              
          angular.forEach(data.data.weather[ 0 ].hourly, function(stats, index){
            results.push(stats);
          });
          console.log(results);
      }).error(function(error) {

      });
    };

  });