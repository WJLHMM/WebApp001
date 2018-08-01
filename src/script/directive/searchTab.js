'use strict'

laGou.directive('searchTab',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		templateUrl:'view/template/searchTab.html',
		scope: {
			tabdata:"=",	
			searchlistshow:"&",	
		}
	};

}]);