'use strict'

laGou.directive('companyjobClassfied',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/companyjobClassfied.html',
	};
}]);