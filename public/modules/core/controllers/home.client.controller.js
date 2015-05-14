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
      localStorageService.set('beach', 
        { 
          'name': details.name,
          'lat': details.geometry.location.A, 
          'long': details.geometry.location.F
        }
      );      
      // redirect to beach display
      $location.path('/beach');
    };
  }
]);