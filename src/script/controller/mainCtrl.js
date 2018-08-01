'use strict'

angular.module('laGouApp').controller('mainCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams) {
	// $scope.info=[];
	$http({
		method:'get',
		url:'./data/positionlist.json',
		cache:true,
	}).then(function(res){
		// $scope.info.push(res.data);
		$scope.info=res.data;
	},function(err){
	});
	
	$scope.text3="请登录";
	

	// $http({
	// 	method:'get',
	// 	url:'data/info.json',
	// 	cache:true,
	// }).success(function(res){
	// 	console.log(res);
	// }).error(function(err){

	// }); angularjs 1.6以后success error方法不在支持 已被移除所以会报错

}]);