'use strict'

laGou.directive('companyHead',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/companyHead.html',
		scope:{
			data2:'=',
		},
		link:function(scope){
			//注意这里的scope同$scope效果一样
			scope.back=function(){
				window.history.back();
			};
		},
	};
		
}]);