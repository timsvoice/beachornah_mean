'use strict';


angular.module('users').controller('BeachController', ['$scope', 'localStorageService', '$http', '$location','Authentication', 'Weather', 'CurrentWeatherFilter', 'WeatherIcon',
  function($scope, localStorageService, $http, $location, Authentication, Weather, CurrentWeatherFilter, WeatherIcon) {
    // globals
    var beachData;    
    // This provides Authentication context.
    $scope.authentication = Authentication;
    // set details returned by google places API
    $scope.details = '';  
    // default temps
    $scope.temp = {
      air: [75,95],
      water: [60,80]
    };

    // set preferences based on user presence
    if ($scope.authentication.user) {
      $scope.preferences = $scope.authentication.user.preferences.notifications;
    } else {
      $scope.preferences = {
        monday:       false,
        tuesday:      false, 
        wednesday:    false, 
        thursday:     false, 
        friday:       false, 
        saturday:     false, 
        sunday:       false, 
        fridayReport: false
      };
    }
    console.log($scope.authentication.user);

    // set beach data source from user or localstorage for anon
    if ($scope.authentication.user && $scope.authentication.user.preferences.beaches > 0) {
      // get user beaches
      var userBeaches = $scope.authentication.user.preferences.beaches;
      // loop through beaches and find favorite
      for (var i = userBeaches.length - 1; i >= 0; i--) {
        if (userBeaches[i].favorite === true) {
          // set beach data to favorite beach
          beachData = {
            name: userBeaches[i].name,
            lat: userBeaches[i].lattitude,
            long: userBeaches[i].longitude
          };
        }
      } 
    } else {
      // set beach data from localstorage
      beachData = localStorageService.get('beach');
    }
    
    // set scope from beach data
    $scope.beachData = {
      name: beachData.name,
      lat:  beachData.lat,
      long: beachData.long
    };   

    // instantiate weather service with localstorage data
    Weather.weatherData($scope.beachData)
      .then(function(response) {                          
        // weather object
        $scope.weather = {
          maxTemp: response.maxTemp,
          minTemp: response.minTemp,
          hours:   response.hourly,
          icons:   {
            300:  WeatherIcon.icon(response.hourly[1].weatherCode),
            600:  WeatherIcon.icon(response.hourly[2].weatherCode),
            900:  WeatherIcon.icon(response.hourly[3].weatherCode),
            1200: WeatherIcon.icon(response.hourly[4].weatherCode),
            1500: WeatherIcon.icon(response.hourly[5].weatherCode),
            1800: WeatherIcon.icon(response.hourly[6].weatherCode),
            2100: WeatherIcon.icon(response.hourly[7].weatherCode),
          }    
        };                

        $scope.weatherUpdate = function(time) {                            
          // set time for data
          $scope.selectedTime = time;
          // filter data by time
          var currentWeather = CurrentWeatherFilter.currentWeather($scope.weather.hours, $scope.selectedTime);
          // convert meters to feet for waves
          var meterFeet = function(meters) {
            var feet = Math.round(meters * 3.2808);
            return feet;
          };
          // set current weather data object
          $scope.currentWeather = {
            weatherDescription: currentWeather[0].weatherDesc[0].value,
            weatherCode:        currentWeather[0].weatherCode,
            airTemp:            currentWeather[0].tempF,
            cloudCover:         currentWeather[0].cloudcover,
            windSpeed:          currentWeather[0].windspeedMiles,
            waterTemp:          currentWeather[0].waterTemp_F,
            waveHeight:         meterFeet(currentWeather[0].swellHeight_m),
            waveInterval:       currentWeather[0].swellPeriod_secs,
            time:               currentWeather[0].time,
            icon:               WeatherIcon.icon(currentWeather[0].weatherCode)
          };
        };
        // set initial weather to 1200
        $scope.weatherUpdate(1200);
        console.log($scope.currentWeather);

        // weather logic 
        // recommendation logic  variables
        var yahTemp = $scope.weather.maxTemp >= 75,
            mehTemp = $scope.weather.maxTemp < 75 && $scope.weather.maxTemp >= 70,
            nahTemp = $scope.weather.maxTemp < 70;
        // weather logic conditions for recommendations
        if ( yahTemp ) {
          $scope.recommendation = 'Yah';
        } else if ( mehTemp ) {
          $scope.recommendation = 'Meh';
        } else { $scope.recommendation = 'Nah'; }
      
      });

    $scope.beach = function() {
      // clear existing beach from local storage
      localStorageService.remove('beach');
      var details = $scope.details;
      // capture long lat
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
          if (data.data.nearest_area[0].distance_miles > 5 || data.data.nearest_area[0] === null) {
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

    $scope.beachPicker = function() {
      // globals
      var favorite;
      var details = '';
      // clear existing beach from local storage
      localStorageService.remove('beach');
      details = $scope.details;
      if ($scope.authentication.user && $scope.authentication.user.preferences.beaches.length === 0 ) {
        favorite = false;
      } else {
        favorite = true;
      }
      // capture long lat
      localStorageService.set('beach', 
        { 
          name: details.name,
          lat:  details.geometry.location.A, 
          long: details.geometry.location.F,
          favorite: favorite
        }
      );
      $http.post('/beach/weather', $scope.beachData)
        .success(function(data, status){
          // console.log(data);
          if (data.data.nearest_area[0].distance_miles > 5 || data.data.nearest_area[0] === null) {
            $scope.errorMessage = 'Looks like that is not a beach, or we do not have sensors nearby. Try another beach';
            $scope.userBeach = '';
          } else{
            $location.path('/beach/temps');
          }
        })
        .error(function(data, status){
          console.log(status);
        });   
    };

    $scope.tempsPicker = function() {
      // clear existing beach from local storage
      var details = $scope.details;
      // capture long lat
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
      localStorageService.set('temps', temp);
      console.log(temp);
      $location.path('/beach/times');  
    };

    $scope.timesPicker = function() {
      // set user variable
      var user = $scope.authentication.user;
      // get preferences
      $scope.authentication.user.preferences.notifications = {
        monday:       user.preferences.notifications.monday,
        tuesday:      user.preferences.notifications.tuesday, 
        wednesday:    user.preferences.notifications.wednesday, 
        thursday:     user.preferences.notifications.thursday, 
        friday:       user.preferences.notifications.friday, 
        saturday:     user.preferences.notifications.saturday, 
        sunday:       user.preferences.notifications.sunday, 
        fridayReport: user.preferences.notifications.fridayReport
      };
      // post user data
      $http.put('/users', user)
        .success(function(data, status){
          // redirect to user profile
          $location.path('/settings/profile');
        })
        .error(function(status){
          console.log(status);
        });
    };

  }
]);