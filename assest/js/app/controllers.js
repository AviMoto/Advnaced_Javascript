'use strict';

var motoGpControllers = angular.module('motoGpControllers',[]);

motoGpControllers.controller('RiderListCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/riders.json').success(function(data){
		$scope.riders = data;
	});
	$scope.orderProp = "id";
}]);

motoGpControllers.controller('RiderDetailsCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	var id = $routeParams.riderId;
	$http.get('data/riders.json').success(function(data){
		for(var rider in data){
			if(data[rider].id == id){
				$scope.rider = data[rider];
			}
		}
	});
	$http.get('data/achievements.json').success(function(data){
		for(var achievment in data){
			if(data[achievment].indexOf(parseInt(id)) != -1){
				$scope[achievment] = true;
			} else {
				$scope[achievment] = false;
			}
		}
	});
}]);