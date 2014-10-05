'use strict';
var motogpFilters = angular.module('motoGpFilters',[]);

motogpFilters.filter('checkmark',function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	};
});