'use strict'

var appControllers = angular.module('appController',[]);

appControllers.controller('RiderListCtrl', [ '$scope', 'Rider',
		function($scope, Rider) {
			$scope.riders = Rider.query();
			$scope.orderProp = "id";
		} ]);

appControllers.controller('RiderDataCtrl', [ '$scope', '$routeParams',
		'Rider', function($scope, $routeParams, Rider) {
			var id = $routeParams.riderId;
			$scope.riders = Rider.query(function(riders){
				for ( var rider in riders) {
					if (riders[rider].id == id) {
						$scope.rider = riders[rider];
						$scope.mainImageUrl = riders[rider].image[0];
					}
				}
			});

			Rider.achiv({riderFile:'achievements'},function(achievments){for ( var achievment in achievments) {
				if (achievments[achievment].indexOf(parseInt(id)) != -1) {
					$scope[achievment] = true;
				} else {
					$scope[achievment] = false;
				}
			}})

			$scope.setImage = function(imageUrl) {
				$scope.mainImageUrl = imageUrl;
			}
		} ]);