define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    homeTemplate = require('text!app/templates/stats.html');

  return angular.module('app.controller.stats', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('stats', {
          url: "/stats",
          controller: 'StatsController',
          template: homeTemplate
        });
    }).controller('StatsController', function ($scope) {
      $scope.title = 'Stats Controller';
    });
});