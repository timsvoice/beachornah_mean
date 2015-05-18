'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('CurrentWeatherFilter', ['$filter',
  function($filter) {

    return {
      currentWeather: function (data, time) {
        var currentWeather = $filter('filter')(data, {time: time});
        return currentWeather;
        }
      };
    }
]);