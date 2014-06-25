var motoGpServices = angular.module('motoGpServices', ['ngResource']);

motoGpServices.factory('Rider',['$resource',function($resource) {
	return $resource('data/:riderFile.json',{riderFile:'riders'},
			{
				query: {method:'GET',params: {riderFile:'riders'}, isArray: true},
				achiv: {method:'GET',params: {riderFile:'achievements'}, isArray: false}
			});
}]);