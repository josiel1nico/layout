angular.module("istim").controller("RankController", ['$scope', '$http', function(scope, http){

	scope.ranks = [];
	scope.api_url = "http://istim_ranking.nodejitsu.com";

	http.get(scope.api_url+"/rank")
		.success(function(data) {
			scope.ranks = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);