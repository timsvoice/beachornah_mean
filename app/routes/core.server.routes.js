'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller'),
      beach = require('../../app/controllers/beach.server.controller');

	app.route('/').get(core.index);
  // beach routes
  app.route('/beach/weather').post(beach.weather);
};