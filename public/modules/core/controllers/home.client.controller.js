'use strict';


angular.module('core').controller('HomeController', ['$scope', 'localStorageService', '$http', '$location','Authentication',
  function($scope, localStorageService, $http, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    // set details returned by google places API
    $scope.details = '';

    $scope.beach = function() {
      // clear existing beach from local storage
      localStorageService.remove('beach');
      var details = $scope.details;
      // capture long lat
      
      $scope.beachData =  { 
        'name': details.name,
        'lat':  details.geometry.location.A, 
        'long': details.geometry.location.F
      };

      localStorageService.set('beach', 
        { 
          'name': details.name,
          'lat':  details.geometry.location.A, 
          'long': details.geometry.location.F
        }
      ); 

      $http.post('/beach/weather', $scope.beachData)
        .success(function(data, status){
          // console.log(data);
          if ( data.data.nearest_area[0] === null || data.data.nearest_area[0].distance_miles > 5) {
            $scope.errorMessage = 'Looks like that is not a beach, or we do not have sensors nearby. Try another beach';
            $scope.userBeach = '';
          } else{
            $location.path('/beach/recommendation');
          }
        })
        .error(function(data, status){
          console.log(status);
        }); 
    };
  }
]);