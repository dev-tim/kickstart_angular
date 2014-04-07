define(function (require) {
  'use strict';
  var angular = require('angular'),
    ContextHolder = require('./context.holder'),
    repository = require('./repository/respository');

  return angular.module('app.services',
      [ContextHolder.name,
      repository.name])
    .value('version', '0.1');
});
