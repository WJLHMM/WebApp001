'use strict'

laGou.directive('searchList',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/searchList.html',
		scope: {
			searchlistdata:"=",
			finditem:"&",
		},
		
	}
}]);