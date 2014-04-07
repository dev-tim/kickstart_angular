define(function (require) {
  var angular = require('angular'),
    mocks = require('angularMocks'),
    app = require('app/directive/social.panel'),
    socialJson = require('text!stubs/social.json');

  socialJson = require('text!stubs/social.json');
  describe('service', function () {
    var httpBackend, _socialStats, _done;
    beforeEach(mocks.module('app.service.social.stats'));

    beforeEach(mocks.inject(function ($httpBackend, socialStats) {
      _socialStats = socialStats;
      httpBackend = $httpBackend;
      httpBackend.resetExpectations();
    }));
    describe('Socoal stats service', function () {
      it('should have defined fetchSocialStats', function () {
        expect(_socialStats.fetchSocialStats).toBeDefined();
      });
      it('should have defined fetchSocialStats to be a function', function () {
        expect(typeof _socialStats.fetchSocialStats).toEqual("function");
      });
      it('should return promise', function () {
        httpBackend.expectGET('stubs/social.json').respond(200, socialJson);
        expect(typeof _socialStats.fetchSocialStats().success).toBe("function");
        httpBackend.flush();
      });
      it('should return promise', function () {
        httpBackend.expectGET('stubs/social.json').respond(200, socialJson);
        expect(typeof _socialStats.fetchSocialStats().success).toBe('function');
        httpBackend.flush();
      });
    });
  });
});