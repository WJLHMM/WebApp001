'use strict'

laGou.directive('searchHead',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/searchHead.html',
		scope:{
			searchkey:"=",
			keysearch:"&",
			cancelsearch:"&",
		}
	};
}]);