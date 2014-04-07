define(function (require) {
  var angular = require('angular'),
    socialStats = require('./social.stats');

  return angular.module('repository', [
    socialStats.name
  ]);

});