'use strict'

laGou.directive('positionFoot',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/positionFoot.html'//注意相对路径是针对index.html的
	};
}]);