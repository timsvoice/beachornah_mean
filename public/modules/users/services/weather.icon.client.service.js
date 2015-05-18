'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('WeatherIcon', [
  function() {
    return {
      icon: function (code) {
        // set icon variables
        var icon,
            sunny =       code === '113',
            partlyCloud = code === '116',
            cloudy =      code === '122' || code === '119' || code === '143',
            partlyRain =  code === '176' || code === '293',
            rain =        code === '296' || code === '299' || code === '302' || code === '308' || code === '317' || code === '320' || code === '353' || code === '356' || code === '389' || code === '386';
        // icon selection logic
        if      ( sunny )       { icon = '/modules/users/img/icons/sunny.png';} 
        else if ( partlyCloud)  { icon = '/modules/users/img/icons/partly_cloudy.png';} 
        else if ( cloudy )      { icon = '/modules/users/img/icons/cloudy.png';} 
        else if ( partlyRain)   { icon = '/modules/users/img/icons/scattered_showers.png';} 
        else if ( rain )        { icon = '/modules/users/img/icons/rain.png';} 
        else                    { icon = '/modules/users/img/icons/snow.png';}
        // return correct icon
        return icon;
      }
    };
  }
]);