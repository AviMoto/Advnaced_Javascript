'use strict';

describe('MotoGpApp controllers', function() {
	describe('RiderListCtrl', function(){
		var scope, ctrl, $httpBackend;
		
		beforeEach(module('motoGpApp'));
		beforeEach(inject(function(_$httpBackend_, rootScope, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('data/riders.json').respond([{name: 'Stefan Bradl'}, {name: 'Colin Edwards'}]);
			scope = $rootScope.$new();
			ctrl = $controller('RiderListCtrl', { $scope: scope });
		}));
		it('should create "riders" model with 2 riders fetched from xhr', function() {
		     expect(scope.riders).toBeUndefined();
		     $httpBackend.flush();
		 
		     expect(scope.riders).toEqual([{name: 'Stefan Bradl'},
		                                  {name: 'Colin Edwards'}]);
		});
		it('should set the default value of orderProp model', function() {
		      expect(scope.orderProp).toBe('id');
		});
    });
});