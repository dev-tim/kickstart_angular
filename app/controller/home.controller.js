define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    homeTemplate = require('text!app/templates/partial1.html');

  var homeController = angular.module('app.controller.home',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home.state', {
          url: "/home",
          controller: homeController,
          template: homeTemplate
        });
    });

  homeController.controller('HomeController', function ($scope) {
    $scope.title = 'Home Controller';
  });

  return homeController;
});