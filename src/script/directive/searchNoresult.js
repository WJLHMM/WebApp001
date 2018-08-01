'use strict'

laGou.directive('searchNoresult',[function(){
	return {
		restrict:'A',//注意A要大写
		replace:true,
		template:'<h1>您的搜索没有结果，请试试其他关键词!</h1>'
	};
}]);