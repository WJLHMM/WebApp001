'use strict'

laGou.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl',
	})
	.state('positioninfo',{
		url:'/positioninfo/{:id}',
		// url:'/positioninfo/?company&jd',
		templateUrl:'view/positioninfo.html',
		controller:'positioninfoCtrl',
	})
	.state('company',{
		// url:'/company',
		url:'/company/{:company}',
		templateUrl:'view/company.html',
		controller:'companyCtrl',
	})
	.state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl',
	})
	.state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl',
	})
	.state('register',{
		url:'/register',
		templateUrl:'view/register.html',
		controller:'registerCtrl',
	})
	.state('persionalogui',{
		url:'/persionalogui',
		templateUrl:'view/persionalogui.html',
		controller:'persionaloguiCtrl',
	})
	.state('myfavorite',{
		url:'/myfavorite',
		templateUrl:'view/myfavorite.html',
		controller:'myfavoriteCtrl',
	})
	.state('mypostresult',{
		url:'/mypostresult',
		templateUrl:'view/mypostresult.html',
		controller:'mypostresultCtrl',
	});

	$urlRouterProvider.otherwise('main');

}]);