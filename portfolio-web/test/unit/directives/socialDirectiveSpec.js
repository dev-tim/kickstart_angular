define(function (require) {
  var angular = require('angular'),
    mocks = require('angularMocks'),
    app = require('app/directive/social.panel'),
    socialJson = require('text!stubs/social.json');

  describe('Social directive', function () {
    var httpBackend, element, mockScope;

    beforeEach(mocks.module('app.directive.socialStatsPanel'));
    beforeEach(mocks.inject(function ($httpBackend, $compile, $rootScope) {
      mockScope = $rootScope.$new();
      element = $compile('<div data-social-stats-panel' +
        ' data-panel-class="panel-info"' +
        ' data-faicon="fa-github"' +
        ' data-type="github"></div>')(mockScope);
      httpBackend = $httpBackend;
      httpBackend.resetExpectations();
    }));

    it('should define attribute to the isolatied scope', function () {
      expect(element.isolateScope()).toBeDefined();
    });

    it('should have same params', function () {
      expect(element.isolateScope().panelClass).toEqual('panel-info');
      expect(element.isolateScope().faicon).toEqual('fa-github');
      expect(element.isolateScope().type).toEqual('github');
    });

    it('should request social info and call filter stats', inject(function (socialStats) {
      spyOn(socialStats, 'findStats');
      httpBackend.expectGET('stubs/social.json').respond(200, socialJson);
      mockScope.$digest();
      httpBackend.flush();
      expect(socialStats.findStats).toHaveBeenCalled();
    }));

    it('should mark flas as error errored incase of fail', inject(function (socialStats) {
      spyOn(socialStats, 'findStats');
      httpBackend.expectGET('stubs/social.json').respond(404, '{"error": 1}');
      mockScope.$digest();
      httpBackend.flush();
      expect(element.isolateScope().requestError).toBeTruthy();
    }));
  });

});