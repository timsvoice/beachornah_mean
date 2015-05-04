app.factory('worldWeatheronlineAPI', function($http) {

  var location = "40.560624,-73.870182";
  var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";
  var url = 'http://api2.worldweatheronline.com/free/v1/marine.ashx?format=json&q=';
  
  var worldWeatheronlineAPI = {};

  worldWeatheronlineAPI.getData = function() {
    return $http.get(url + location + '&key=' + apiKey).success(function(data){
      console.log(data);
    });
  };
  
  return worldWeatheronlineAPI;

});