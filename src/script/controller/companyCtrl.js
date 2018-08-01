'use strict'

laGou.controller('companyCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams) {
	$scope.text1="公司职位"
	$http({
		method:'get',
		url:'./data/companyinfo.json',
		cache:true,
	}).then(function(res){
		// 通过for循环遍历不能得出结果只好用foreach
		// for(var i=0;i<res.data.lenght;i++){(function(i){
		// 	if(res.data[i].companyName=$stateParams.company){
		// 		$scope.cinfo = res.data[i];
		// 	};
		// })(i);
		// }
		angular.forEach(res.data, function(value, key) {
		    if(value.companyName==$stateParams.company){
				$scope.cinfo = value;
			};
		});
		$scope.showtech = function(e) {
			angular.forEach($scope.cinfo.otherjobs, function(value, key) {
			    if(value.classfied!=e){
					value.trigger=false;
				}else {
					value.trigger=true;
				};
			});
		};
		$scope.showoper = function(e) {
			angular.forEach($scope.cinfo.otherjobs, function(value, key) {
			    if(value.classfied!=e){
					value.trigger=false;
				}else {
					value.trigger=true;
				};
			});
		};
		$scope.showall = function() {
			angular.forEach($scope.cinfo.otherjobs, function(value, key) {
				value.trigger=true;
			});
		};
	},function(err){
	});
	
}]);