'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  errorHandler = require('../../app/controllers/errors.server.controller'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User'),
  world_weather_api = process.env.WORLD_WEATHER_API,
  request = require('request');

exports.weather = function(req, res) {
  var beach = req.body;
  // create an api call to wwo
  request('http://api.worldweatheronline.com/free/v2/marine.ashx?key=' + world_weather_api + '&q=' + beach.lat + ',' + beach.long + '&format=json', 
    function(error, response, body) {      
      var dataJson = JSON.parse(body);
      res.send(dataJson);
    });  
};
