/**
 * Created by devartemz on 23.03.14.
 */
define([
  'angular',
  'angularMocks',
  'app/app'
], function (angular, mocks, app) {
  'use strict';

  describe('Projects controller ', function () {
    var controller, mockScope;
    beforeEach(mocks.module('app.controller.projects'));
    beforeEach(mocks.inject(function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller('ProjectsController', {
          $scope: mockScope
      });
    }));
    describe('ProjectsController', function () {
      it('should be not null', function () {
        expect(controller).not.toBe(null);

      });
      it('should have title field', function () {
        expect(mockScope.title).toEqual('Projects Controller');
      });
    });
  });
});