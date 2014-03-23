/*global describe beforeEach it expect */

define([
	'angular',
	'angularMocks',
	'app/app'
], function(angular, mocks, app) {
	'use strict';

	describe('service', function() {
		beforeEach(mocks.module('app.services'));
		describe('version', function() {
			it('should return current version', mocks.inject(function(version) {
				expect(version).toEqual('0.1');
			}));
      it('should be mimimi', function(){
         expect(1).toEqual(1);
      });
      it('should be mimimi', function(){
        expect(1).toNotBe(112);
      });
		});
	});
});