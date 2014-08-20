app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('mainController', ['$scope', '$route', 'worldWeatheronlineAPI', 'magicSeaweedAPI',
  function($scope, $route, worldWeatheronlineAPI, magicSeaweedAPI) {

    $scope.results = [];
    $scope.temp = [];
    $scope.ornah = [];
    $scope.background = [];

    getData();

    function getData() {
      worldWeatheronlineAPI.getData()
      .success(function (data) {
        $scope.temp = (data.data.weather[0].maxtempC);
        $scope.results = (data.data.weather[0].hourly);
        if ($scope.temp >= "24" && ($scope.results[4].weatherCode =! 176 | $scope.results[4].weatherCode < 266)) {
            $scope.ornah.push("yah");
            $scope.background.push("images/yah.png");
        }   else if ($scope.temp <= "18" | ($scope.results[4].weatherCode = 122)) {
            $scope.ornah.push("meh");
            $scope.background.push("images/nah.png");
        }   else {
            $scope.ornah.push("nah");
            $scope.background.push("images/nah.png");
        }
        console.log($scope.ornah);
        });
    }
}]);

