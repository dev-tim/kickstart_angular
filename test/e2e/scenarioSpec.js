/*global browser sleep element describe beforeEach it expect */

(function() {
'use strict';

describe('Check application route', function() {
	beforeEach(function() {
		browser().navigateTo('/');
		sleep(1);
	});


	it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
		expect(browser().location().url()).toBe("/home");
	});

	describe('View 1', function() {
		beforeEach(function() {
			browser().navigateTo('#/view1');
			sleep(1);
		});

		it('should...', function() {
        expect(1).toBe(1);
		});
	});
});

})();