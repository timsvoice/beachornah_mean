app.factory('weatherAPI', function($http) {

    var location = "40.560624,-73.870182";
    var apiKey = "b8b0ce91aff80e7fc445db42a798738b16a956ed";
    

     $scope.init = function() {
        //Create the date string and ensure leading zeros if required
        $http.get('http://api.worldweatheronline.com/free/v1/marine.ashx?format=json&q=' + location + '&key=' + apiKey).success(function(data) {
            console.log(data);
        }).error(function(error) {
 
        });
    };
  });