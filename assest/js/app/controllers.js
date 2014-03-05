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
		 'id': 93},
		{'name' : 'Jorge Lorenzo',
		 'image': 'assest/images/rider_6060.jpg',
		 'country': {'name': 'SPAIN',
			    	 'image': 'assest/images/SPA.png'},
		 'id': 99},
		{'name' : 'Nicky Hayden',
		 'image': 'assest/images/rider_6200.jpg',
		 'country': {'name': 'USA',
				     'image': 'assest/images/USA.png'},
		 'id': 69},
		{'name' : 'Dani Pedrosa',
		 'image': 'assest/images/rider_5515.jpg',
		 'country': {'name': 'SPAIN',
					 'image': 'assest/images/SPA.png'},
		 'id': 26},	 
	     ];
	$scope.orderProp = "id";
});