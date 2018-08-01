'use strict'

laGou.directive('appFoot',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/foot.html',//注意相对路径是针对index.html的
		scope:{
			data3:"=",
		}
	};
}]);