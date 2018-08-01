'use strict'

laGou.directive('appHead',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/head.html'//注意相对路径是针对index.html的
	};
}]);