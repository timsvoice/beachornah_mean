'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Weather', ['$http',
  function($http) {

    var celsiusConverter = function (c) {
     return (c * 2) + 30;
    };

    return {
      weatherData: function (beach) {
        return $http.post('/beach/weather', beach)
        .then(function(response){
          var weather = response.data.data.weather[0];
          var beachWeather = {
            maxTemp: celsiusConverter(weather.maxtempC),
            minTemp: celsiusConverter(weather.mintempC),
            hourly: weather.hourly          
          };
          return beachWeather;
        });
      }
    }; 

  }
]);