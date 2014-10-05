var motoGpRiders = angular.module('motoGpRiders',[
	'ngRoute',
	'appController',
	'motoGpFilters',
	'motoGpServices',
	'motoGpAnimations'
]);

motoGpRiders.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/rider/list',{
			templateUrl: 'view/riders-list.html',
        	controller: 'RiderListCtrl'
		}).when('/rider/:riderId',{
			templateUrl: 'view/rider-details.html',
        	controller: 'RiderDataCtrl'
		}).otherwise({
        	redirectTo: '/rider/list'
      });
}]);