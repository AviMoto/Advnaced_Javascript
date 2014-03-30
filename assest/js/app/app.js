'use strict';

var motoGpApp = angular.module('motoGpApp',[
                                            'ngRoute',
                                            'motoGpControllers']);

motoGpApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/riders',{
		templateUrl: 'templates/rider-list.html',
		controller: 'RiderListCtrl'
	}).when('/riders/:riderId',{
		templateUrl: 'templates/rider-details.html',
		controller: 'RiderDetailsCtrl'
	}).otherwise({
		redirectTo: '/riders'
	});
}]);