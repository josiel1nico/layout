angular.module("istim").controller("RankController", ['$scope', '$http', function(scope, http) {


	scope.rank_list = [];
	scope.api_url = "http://istim_ranking.nodejitsu.com";

	http.get(scope.api_url+"/rank")
		.success(function(data) {
			scope.rank_list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);

