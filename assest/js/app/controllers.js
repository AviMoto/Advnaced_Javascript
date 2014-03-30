'use strict';

var motoGpControllers = angular.module('motoGpControllers',[]);

motoGpControllers.controller('RiderListCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/riders.json').success(function(data){
		$scope.riders = data;
	});
	$scope.orderProp = "id";
}]);

motoGpControllers.controller('RiderDetailsCtrl',['$scope','$routeParams',function($scope,$routeParams){
	$scope.riderId = $routeParams.riderId;
}]);