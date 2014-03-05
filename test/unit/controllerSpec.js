'use strict';

describe('MotoGpApp controllers', function() {
	describe('RiderListCtrl', function(){
		beforeEach(module('motoGpApp'));
		it('should create "riders" model with 2 riders', inject(function($controller) {
			var scope = {}, 
			ctrl = $controller('RiderListCtrl', { $scope: scope });
     
			expect(scope.riders.length).toBe(2);
		}));
    });
});