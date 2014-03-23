define(function (require) {
  'use strict';
  var angular = require('angular');
  /* Services */

  // Demonstrate how to register services
  // In this case it is a simple value service.
	return angular.module('app.services', [])
		.value('version', '0.1');
});
