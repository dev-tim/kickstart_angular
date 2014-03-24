define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    homeTemplate = require('text!app/templates/home.html');

  return angular.module('app.controller.home', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "/home",
          controller: 'HomeController',
          template: homeTemplate
        });
    }).controller('HomeController', function ($scope) {
      $scope.title = 'Home Controller';
    });
});