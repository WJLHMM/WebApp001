'use strict'

laGou.controller('mypostresultCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams){ 
	$scope.text ="投递记录";
	$scope.star ="【不合适】";
	$scope.tabtext=["全部","面试邀请","不合适"];
	$http({
		method:'get',
		url:'./data/positionlist.json',
		cache:true,
	}).then(function(res){
		// $scope.info.push(res.data);
		$scope.info=res.data;
	},function(err){
	});
	
}]);