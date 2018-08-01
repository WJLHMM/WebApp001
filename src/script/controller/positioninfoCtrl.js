'use strict'

laGou.controller('positioninfoCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams) {
	$scope.text="职位信息";
	$http({
		method:'get',
		url:'./data/jobdescript.json',
		cache:true,
	}).then(function(res){
		$scope.pinfo = res.data[$stateParams.id];
		// console.log($scope.pinfo);
		// console.log($stateParams);
	},function(err){
	});
}]);