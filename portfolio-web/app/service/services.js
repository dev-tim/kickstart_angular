define(function (require) {
  'use strict';
  var angular = require('angular'),
    ContextHolder = require('./context.holder')
    ;

  // Demonstrate how to register services
  // In this case it is a simple value service.
  return angular.module('app.services', [ContextHolder.name])
    .value('version', '0.1');
});
