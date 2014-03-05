'use strict';

var motoGpApp = angular.module('motoGpApp',[]);

motoGpApp.controller('RiderListCtrl',function($scope){
	$scope.riders = [
	    {'name' : 'Valentino Rossi',
	     'image': 'assest/images/rider_158.jpg',
	     'country': {'name': 'ITALY',
	    	 		 'image': 'assest/images/ITA.png'},
	     'id': 46},
	     {'name' : 'Marq Marquez',
		     'image': 'assest/images/rider_7444.jpg',
		     'country': {'name': 'SPAIN',
		    	 		 'image': 'assest/images/SPA.png'},
		     'id': 93}
	     ];
});