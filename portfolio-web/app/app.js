define([
	'angular',
	'ngResource',
  './filter/filters',
  './service/services',
  './directive/directives',
  './controller/controllers',
  'uiRouter'
], function (angular, ngResource, filters, services, directives, controllers) {
		'use strict';

		return angular.module('app', [
      'ui.router',
      'ngResource',
			'app.controllers',
			'app.filters',
			'app.services',
			'app.directives'
		]);
});
