define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    cvTemplate = require('text!app/templates/cv.html');

  return angular.module('app.controller.cv', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('cv', {
          url: "/cv",
          controller: 'CvController',
          template: cvTemplate
        });
    }).controller('CvController', function ($scope) {
      $scope.title = 'Cv Controller';
    });
});