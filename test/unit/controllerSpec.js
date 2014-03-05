'use strict';

describe('MotoGpApp controllers', function() {
	describe('RiderListCtrl', function(){
		var scope, ctrl;
		
		beforeEach(module('motoGpApp'));
		beforeEach(inject(function($controller){
			scope = {};
			ctrl = $controller('RiderListCtrl', { $scope: scope });
		}));
		it('should create "riders" model with 5 riders',function(){
			expect(scope.riders.length).toBe(5);
		});
		
		it('should set default value of order to be',function(){
			expect(scope.orderProp).toBe('id');
		});
    });
});