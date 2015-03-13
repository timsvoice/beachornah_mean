app.factory('worldWeatheronlineAPI', function($http) {

  var location = "40.560624,-73.870182";
  var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";
  var url = 'http://api2.worldweatheronline.com/free/v1/marine.ashx?format=json&q=' + location + '&key=' + apiKey;
  
  var worldWeatheronlineAPI = {};

  worldWeatheronlineAPI.getData = function() {
    return $http.get(url).success(function(data){
      console.log(data);
    });
  };
  
  return worldWeatheronlineAPI;

});

app.factory('magicSeaweedAPI', function($http) {

  var location = "10";
  var apiKey = "qG21ZE2M77GvWjOnu28h7S1nYflsdr4x";
  var url = ' http://www.corsproxy.com/magicseaweed.com/api/' + apiKey + '/forecast/?spot_id=' + location + '?callback=JSON_CALLBACK';
  
  var magicSeaweedAPI = [];

  magicSeaweedAPI.getData = function() {
    return $http.get(url, {headers: {
    }}).success(function(data){
      console.log("success");
      console.log(data);
    }).error(function(headers) {
      console.log("test");
    });
  };
  
  return magicSeaweedAPI;

});