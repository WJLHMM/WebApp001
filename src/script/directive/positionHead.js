'use strict'

laGou.directive('positionHead',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/positionHead.html',
		scope:{
			data1:'=',
		},
		link:function(scope){
			//注意这里的scope同$scope效果一样
			scope.back=function(){
				window.history.back();
			};
		},
	};
		
}]);