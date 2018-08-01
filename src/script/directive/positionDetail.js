'use strict'

laGou.directive('positionDetail',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionDetail.html',
		// scope:{
		// 	jobdescriptData:"=",
		// }
	};
}]);