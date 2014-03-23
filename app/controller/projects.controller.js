define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    projectsTemplate = require('text!app/templates/projects.html');

  return angular.module('app.controller.projects', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('projects.state', {
          url: "/projects",
          controller: 'ProjectsController',
          template: projectsTemplate
        });
    }).controller('ProjectsController', function ($scope) {
      $scope.title = 'Projects Controller';
    });
});