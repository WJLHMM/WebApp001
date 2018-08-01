'use strict'

laGou.directive('appPositionlist',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		// transclude:true,
		templateUrl:'view/template/positionlist.html',
		scope: {
			data:'=',
			data1:'=',
			data4:"=",
		}
	};
}]);