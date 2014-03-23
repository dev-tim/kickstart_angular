define(function(require) {
	'use strict';
  var angular = require('angular'),
    topHeader = require('./top.header');

	return angular.module('app.directives', ['app.directive.top.header']);
});
