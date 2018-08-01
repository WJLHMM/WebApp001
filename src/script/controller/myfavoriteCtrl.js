'use strict'

laGou.controller('myfavoriteCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams){ 
	$scope.text ="我的收藏";
	$scope.star ="★";
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