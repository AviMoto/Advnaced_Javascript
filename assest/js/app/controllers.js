'use strict';

var motoGpApp = angular.module('motoGpApp',[]);

motoGpApp.controller('RiderListCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/riders.json').success(function(data){
		$scope.riders = data;
	});
	$scope.orderProp = "id";
}]);