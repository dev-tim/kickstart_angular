define(function (require) {
  'use strict';
  var angular = require('angular'),
   HomeController = require('./home.controller');
  
  var controllers = angular.module('app.controllers', ['app.controller.home',
    'app.controller.stats',
    'app.controller.contact.form']).config(function($stateProvider, $urlRouterProvider) {

  });

  controllers.controller('AppController', function($scope){
      $scope.greeFormRootScope = "greet!";
  });

  return controllers;
});