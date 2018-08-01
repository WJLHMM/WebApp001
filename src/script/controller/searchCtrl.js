'use strict'

laGou.controller('searchCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
	$scope.text3="我的信息";
	$scope.tabtext=["城市","薪资","公司规模"];
	$scope.info=[];
	$http({
		method:'get',
		url:'./data/positionlist.json',
		cache:true,
	}).then(function(res){
		$scope.info.push(res.data);
		// $scope.info=res.data;
	},function(err){});

	$scope.searchlist = [];
	$http({
		method:'get',
		url:'./data/city.json',
		cache:true,
	}).then(function(res){
		$scope.searchlist.push(res.data);
	},function(err){});
	$http({
		method:'get',
		url:'./data/salary.json',
		cache:true,
	}).then(function(res){
		$scope.searchlist.push(res.data);
	},function(err){});
	$http({
		method:'get',
		url:'./data/scale.json',
		cache:true,
	}).then(function(res){
		$scope.searchlist.push(res.data);
	},function(err){});

	$scope.visibility = false;
	$scope.searchlistshow = function(item) {
		$scope.searchlistinfo = $scope.searchlist[item];
		$scope.visibility = true; 
	}
	$scope.searchlisthide = function() {
		$scope.visibility = false; 
	}
	$scope.selectlist = [];
	// 注意深拷贝目标在前，原型在后
	$scope.selectlist =angular.copy($scope.selectlist,$scope.info);
	$scope.select = function(id,name) {
		$scope.info=[];
		$scope.selectlist1 =[];
		if(!id){
			$scope.info=$scope.selectlist;
			$scope.visibility1 = false;
		}else if(id){
			angular.forEach($scope.selectlist[0], function(value, key){
	 			if(value.city==name||value.scale==name||value.salary==name){
	 				$scope.selectlist1.push(value);
	 			}
 			$scope.info.push($scope.selectlist1);
 			$scope.visibility1 = false;
 			});
 			angular.forEach($scope.info, function(value, key){
 				if (value.length==0) {
				$scope.visibility1 = true;
				}	
 			});
		}
		$scope.visibility = false;	
	}

	$scope.searchkeyfn=function(searchkey){
		if(searchkey=="全国"||searchkey=="不限"){
			$scope.info=$scope.selectlist;
			$scope.visibility1 = false;
		}else {
			$scope.info=[];
			$scope.selectlist1 =[];
			angular.forEach($scope.selectlist[0], function(value, key){
				if(value.city==searchkey||value.scale==searchkey||value.salary==searchkey||value.companyName==searchkey||value.position==searchkey){
					$scope.selectlist1.push(value);
				}else{
					$scope.info=[];
	
				}
				$scope.info.push($scope.selectlist1);
				$scope.searchkey='';
				$scope.visibility1 = false;
			});
			angular.forEach($scope.info, function(value, key){
				if (value.length==0) {
					$scope.visibility1 = true;
				}	
			});
		}
		
	}

	$scope.cancel=function(){
		$scope.info=[];
		$scope.info=$scope.selectlist;
		$scope.searchkey='';
		$scope.visibility1 = false;
	}

}]);