'use strict';

var motoGpControllers = angular.module('motoGpControllers',[]);

motoGpControllers.controller('RiderListCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/riders.json').success(function(data){
		$scope.riders = data;
	});
	$scope.orderProp = "id";
}]);

motoGpControllers.controller('RiderDetailsCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	$http.get('data/riders.json').success(function(data){
		for(var rider in data){
			if(data[rider].id == $routeParams.riderId){
				$scope.rider = data[rider];
			}
		}
	});
}]);