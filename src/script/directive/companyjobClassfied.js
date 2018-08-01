'use strict'

laGou.directive('companyInfo',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/companyInfo.html',
	};
}]);