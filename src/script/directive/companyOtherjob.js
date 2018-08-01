'use strict'

laGou.directive('companyOtherjob',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/companyOtherjob.html',
	};
}]);