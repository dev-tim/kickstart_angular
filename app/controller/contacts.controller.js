define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    contactsTemplate = require('text!app/templates/contact.html');

  var homeController = angular.module('app.controller.contacts',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('contacts.state', {
          url: "/contacts",
          controller: 'ContactsController',
          template: contactsTemplate
        });
    });

  homeController.controller('ContactsController', function ($scope) {
    $scope.title = 'Contacts Controller';
  });

  return homeController;
});