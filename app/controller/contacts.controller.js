define(function (require) {
  'use strict';

  var angular = require('angular'),
    uiRouter = require('uiRouter'),
    contactsTemplate = require('text!app/templates/contact.html');

  var contactController = angular.module('app.controller.contacts', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('contacts', {
          url: "/contacts",
          controller: 'ContactsController',
          template: contactsTemplate
        });
    });

  contactController.controller('ContactsController', function ($scope,$timeout) {
    $scope.title = 'Contacts Controller';
    $scope.contact = {
      email: '',
      subject: '',
      message: ''
    };

    $scope.hasError = function (field) {
      var res = false;
      if ($scope.contact_form && $scope.contact_form[field]) {
        res = $scope.contact_form[field].$invalid && $scope.contact_form[field].$dirty;
      }
      return res;
    };
  });

  return contactController;
});