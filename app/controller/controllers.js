define(function (require) {
  'use strict';
  var angular = require('angular'),
    HomeController = require('./home.controller'),
    ProjectsController = require('./projects.controller'),
    ContactsController = require('./contacts.controller'),
    StatsController = require('./stats.controller');

  return angular.module('app.controllers', [HomeController.name,
      ProjectsController.name,
      ContactsController.name,
      StatsController.name])
    .controller('AppController', function ($scope) {
      $scope.aside = "aside message";
      $scope.mainMessage = "main message";
    });
});