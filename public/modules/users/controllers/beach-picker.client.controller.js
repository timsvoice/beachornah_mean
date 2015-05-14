
'use strict';

angular.module('users').controller('BeachController', ['$scope', '$http', '$location', 'localStorageService','Authentication',
  function($scope, $http, $location, localStorageService, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.userBeach = '';
    $scope.details = '';
    $scope.temp = {
      air: [75,95],
      water: [60,80]
      };

    $scope.beach = function() {
      localStorageService.set('key', 'val');
      // capture long lat
      // create http call to WWO
      // store returned data
      // redirect to beach display
    };

    $scope.beachSelect = function() {
      // details from google places API response
      var details = $scope.details;
      var user = $scope.authentication.user;
      // save input from form
      $scope.authentication.user.preferences.beaches.push({
        name: details.name,
        place_id: details.place_id,
        lattitude: details.geometry.location.A,
        longitude: details.geometry.location.F
      });

      console.log($scope.authentication.user);      
      // post new beach to user
      $http.put('/users', user)
        .then(function(response){
          return response;
        });

      $location.path('/beach/temps');
      
    };    

    $scope.preferencesSelect = function() {
      // set temp object
      var temp = {
        air: {
          minTemp: $scope.temp.air[0],
          maxTemp: $scope.temp.air[1]
        },
        water: {
          minTemp: $scope.temp.water[0],
          maxTemp: $scope.temp.water[1]
        }
      };

      // set user
      var user = $scope.authentication.user;
      // save input from form
      $scope.authentication.user.preferences.temps = {
        air: {
          minTemp: temp.air.minTemp,
          maxTemp: temp.air.maxTemp
        },
        water: {
          minTemp: temp.water.minTemp,
          maxTemp: temp.water.maxTemp
        }
      };

      console.log($scope.authentication.user);      
      // post new beach to user
      $http.put('/users', user)
        .then(function(response){
          return response;
        });

      $location.path('/signup');
      
    };
  }
]);