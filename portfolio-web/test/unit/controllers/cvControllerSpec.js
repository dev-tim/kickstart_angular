define([
  'angular',
  'angularMocks',
  'app/app'
], function (angular, mocks, app) {

  describe('Cv controller', function () {
    var controller, mockScope;
    beforeEach(mocks.module('app.controller.cv'));
    beforeEach(mocks.inject(function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller('CvController', {
          $scope: mockScope
      });
    }));
    describe('CvController', function () {
      it('should be not null', function () {
        expect(controller).not.toBe(null);
      });
      it('should have title field', function () {
        expect(mockScope.title).toEqual('Cv Controller');
      });
    });
  });
});