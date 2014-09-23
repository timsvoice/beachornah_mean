app.controller('MainController', ['$scope','$window', '$route', 'worldWeatheronlineAPI',
  function($scope, $route, $window, worldWeatheronlineAPI) {

    var awsLocation = "https://s3.amazonaws.com/beachornah/img/";
    
    $scope.results = [];
    $scope.temp = [];
    $scope.ornah = [];
    $scope.background = [];
    $scope.beachLocation = [
        {id: 2, location: 'Fort Tilden',latlong: 123},
    ];
    // $scope.times = [
    //     "9AM",
    //     "12PM",
    //     "3PM",
    //     "6PM",
    // ];
    $scope.user = {};

    

    $scope.update = function(user) {
        $scope.user = angular.copy(user);
    };

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
        });
    }

    getData();
    console.log($scope.user);

}]);