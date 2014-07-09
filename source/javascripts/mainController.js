angular.module('beachday.controllers', [])
.controller('mainController', ['$scope', 'worldWeatheronlineAPI',
  function($scope, worldWeatheronlineAPI) {

  $scope.results = [];

  getData();

  function getData() {
      worldWeatheronlineAPI.getData()
      .success(function (data) {
        $scope.results = data.data.weather[0].hourly;

  console.log($scope.results);
});
}

}]);

angular.module('beachday.services', [])
.factory('worldWeatheronlineAPI', function($http) {

  var location = "40.560624,-73.870182";
  var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";
  var url = 'http://api.worldweatheronline.com/free/v1/marine.ashx?format=json&q=' + location + '&key=' + apiKey;
  
  var worldWeatheronlineAPI = {};

  worldWeatheronlineAPI.getData = function() {
    return $http.get(url);
  };
  
  return worldWeatheronlineAPI;

});