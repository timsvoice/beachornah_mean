app.controller('WeatherController', ['$scope','$http', '$routeParams','$location',
  function($scope, $http, $routeParams, $location) {
    
    var location = "40.560624,-73.870182";
    var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";
    var url = 'http://api.worldweatheronline.com/free/v1/marine.ashx?format=json&q=';
    var worldWeatheronlineAPI = {};

    $scope.currentUrl = $location.path();
    $scope.results = [];
    $scope.temp = [];
    $scope.ornah = [];
    $scope.background = [];
    $scope.beachLocation = [
        {id: 2, location: 'forttilden', name: 'Fort Tilden', latlong: "40.559064,-73.885521"},
        {id: 2, location: 'jonesbeach', name: 'Jones Beach', latlong: "40.591604,-73.507536"},
        {id: 2, location: 'longbeach', name: 'Long Beach', latlong: "40.580938,-73.668026"},
        {id: 2, location: 'rockaways', name: 'Rockaways', latlong: "40.583221,-73.809933"},
        {id: 2, location: 'sunkenmeadow', name: 'Sunken Meadow', latlong: "40.913335,-73.257770"},
        {id: 2, location: 'oceanbeach', name: 'Ocean Beach', latlong: "40.643422,-73.154728"},
        {id: 2, location: 'easthampton', name: 'East Hampton', latlong: "40.946653,-72.174974"}
        ];
    
    worldWeatheronlineAPI.getData = function() {
      return $http.get(url + $routeParams.latlong + '&key=' + apiKey).success(function(data){
        console.log(data);
      });
    };

    $scope.yahnah = true;
    $scope.stats = false;

    $scope.user = {};

    $scope.update = function(user) {
        $scope.user = angular.copy(user);
    };

    function getData() {
      worldWeatheronlineAPI.getData()
      .success(function (data) {
        $scope.temp = (data.data.weather[0].maxtempC);
        console.log($scope.temp);
        $scope.results = (data.data.weather[0].hourly);
        if ($scope.temp >= 24 && ($scope.results[4].weatherCode =! 176 || $scope.results[4].weatherCode < 266)) {
            $scope.ornah.push("yah");
            $scope.background.push("images/yah.png");
        }   else if (($scope.temp >= 15 && $scope.temp <= 18)) {
            $scope.ornah.push("meh");
            $scope.background.push("images/nah.png");
        }   else {
            $scope.ornah.push("nah");
            $scope.background.push("images/nah.png");
        }
        });
  }

    getData();

  }]);