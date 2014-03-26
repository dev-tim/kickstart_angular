/**
 * Created by devartemz on 23.03.14.
 */
define([
  'angular',
  'angularMocks',
  'app/app',
  'text!app/templates/contact.html'
], function (angular, mocks, app, tpl) {
  'use strict';

  describe('Contact controller', function () {
    var controller, mockScope;
    beforeEach(mocks.module('app.controller.contacts'));
    beforeEach(mocks.inject(function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller('ContactsController', {
        $scope: mockScope
      });
    }));

    describe('ContactsController', function () {

      it('should be not null', function () {
        expect(controller).not.toBeNull();
      });

      it('should have title field', function () {
        expect(mockScope.title).toEqual('Contacts Controller');
      });

      it('should be contact in $scope', function () {
        expect(mockScope.contact).toEqual({
          email: '',
          message: '',
          subject: ''
        });
      });

    });
  });
});