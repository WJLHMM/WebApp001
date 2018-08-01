'use strict';

var laGou = angular.module('laGouApp', ['ui.router']);
'use strict';

laGou.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('main', {
		url: '/main',
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	}).state('positioninfo', {
		url: '/positioninfo/{:id}',
		// url:'/positioninfo/?company&jd',
		templateUrl: 'view/positioninfo.html',
		controller: 'positioninfoCtrl'
	}).state('company', {
		// url:'/company',
		url: '/company/{:company}',
		templateUrl: 'view/company.html',
		controller: 'companyCtrl'
	}).state('search', {
		url: '/search',
		templateUrl: 'view/search.html',
		controller: 'searchCtrl'
	}).state('login', {
		url: '/login',
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: 'view/register.html',
		controller: 'registerCtrl'
	}).state('persionalogui', {
		url: '/persionalogui',
		templateUrl: 'view/persionalogui.html',
		controller: 'persionaloguiCtrl'
	}).state('myfavorite', {
		url: '/myfavorite',
		templateUrl: 'view/myfavorite.html',
		controller: 'myfavoriteCtrl'
	}).state('mypostresult', {
		url: '/mypostresult',
		templateUrl: 'view/mypostresult.html',
		controller: 'mypostresultCtrl'
	});

	$urlRouterProvider.otherwise('main');
}]);
'use strict';

laGou.controller('companyCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	$scope.text1 = "公司职位";
	$http({
		method: 'get',
		url: './data/companyinfo.json',
		cache: true
	}).then(function (res) {
		// 通过for循环遍历不能得出结果只好用foreach
		// for(var i=0;i<res.data.lenght;i++){(function(i){
		// 	if(res.data[i].companyName=$stateParams.company){
		// 		$scope.cinfo = res.data[i];
		// 	};
		// })(i);
		// }
		angular.forEach(res.data, function (value, key) {
			if (value.companyName == $stateParams.company) {
				$scope.cinfo = value;
			};
		});
		$scope.showtech = function (e) {
			angular.forEach($scope.cinfo.otherjobs, function (value, key) {
				if (value.classfied != e) {
					value.trigger = false;
				} else {
					value.trigger = true;
				};
			});
		};
		$scope.showoper = function (e) {
			angular.forEach($scope.cinfo.otherjobs, function (value, key) {
				if (value.classfied != e) {
					value.trigger = false;
				} else {
					value.trigger = true;
				};
			});
		};
		$scope.showall = function () {
			angular.forEach($scope.cinfo.otherjobs, function (value, key) {
				value.trigger = true;
			});
		};
	}, function (err) {});
}]);
'use strict';

angular.module('laGouApp').controller('loginCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {}]);
'use strict';

angular.module('laGouApp').controller('mainCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	// $scope.info=[];
	$http({
		method: 'get',
		url: './data/positionlist.json',
		cache: true
	}).then(function (res) {
		// $scope.info.push(res.data);
		$scope.info = res.data;
	}, function (err) {});

	$scope.text3 = "请登录";

	// $http({
	// 	method:'get',
	// 	url:'data/info.json',
	// 	cache:true,
	// }).success(function(res){
	// 	console.log(res);
	// }).error(function(err){

	// }); angularjs 1.6以后success error方法不在支持 已被移除所以会报错
}]);
'use strict';

laGou.controller('myfavoriteCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	$scope.text = "我的收藏";
	$scope.star = "★";
	$http({
		method: 'get',
		url: './data/positionlist.json',
		cache: true
	}).then(function (res) {
		// $scope.info.push(res.data);
		$scope.info = res.data;
	}, function (err) {});
}]);
'use strict';

laGou.controller('mypostresultCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	$scope.text = "投递记录";
	$scope.star = "【不合适】";
	$scope.tabtext = ["全部", "面试邀请", "不合适"];
	$http({
		method: 'get',
		url: './data/positionlist.json',
		cache: true
	}).then(function (res) {
		// $scope.info.push(res.data);
		$scope.info = res.data;
	}, function (err) {});
}]);
'use strict';

angular.module('laGouApp').controller('persionaloguiCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	$scope.text3 = "我的信息";
}]);
'use strict';

laGou.controller('positioninfoCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	$scope.text = "职位信息";
	$http({
		method: 'get',
		url: './data/jobdescript.json',
		cache: true
	}).then(function (res) {
		$scope.pinfo = res.data[$stateParams.id];
		// console.log($scope.pinfo);
		// console.log($stateParams);
	}, function (err) {});
}]);
'use strict';

angular.module('laGouApp').controller('registerCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {}]);
'use strict';

laGou.controller('searchCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.text3 = "我的信息";
	$scope.tabtext = ["城市", "薪资", "公司规模"];
	$scope.info = [];
	$http({
		method: 'get',
		url: './data/positionlist.json',
		cache: true
	}).then(function (res) {
		$scope.info.push(res.data);
		// $scope.info=res.data;
	}, function (err) {});

	$scope.searchlist = [];
	$http({
		method: 'get',
		url: './data/city.json',
		cache: true
	}).then(function (res) {
		$scope.searchlist.push(res.data);
	}, function (err) {});
	$http({
		method: 'get',
		url: './data/salary.json',
		cache: true
	}).then(function (res) {
		$scope.searchlist.push(res.data);
	}, function (err) {});
	$http({
		method: 'get',
		url: './data/scale.json',
		cache: true
	}).then(function (res) {
		$scope.searchlist.push(res.data);
	}, function (err) {});

	$scope.visibility = false;
	$scope.searchlistshow = function (item) {
		$scope.searchlistinfo = $scope.searchlist[item];
		$scope.visibility = true;
	};
	$scope.searchlisthide = function () {
		$scope.visibility = false;
	};
	$scope.selectlist = [];
	// 注意深拷贝目标在前，原型在后
	$scope.selectlist = angular.copy($scope.selectlist, $scope.info);
	$scope.select = function (id, name) {
		$scope.info = [];
		$scope.selectlist1 = [];
		if (!id) {
			$scope.info = $scope.selectlist;
			$scope.visibility1 = false;
		} else if (id) {
			angular.forEach($scope.selectlist[0], function (value, key) {
				if (value.city == name || value.scale == name || value.salary == name) {
					$scope.selectlist1.push(value);
				}
				$scope.info.push($scope.selectlist1);
				$scope.visibility1 = false;
			});
			angular.forEach($scope.info, function (value, key) {
				if (value.length == 0) {
					$scope.visibility1 = true;
				}
			});
		}
		$scope.visibility = false;
	};

	$scope.searchkeyfn = function (searchkey) {
		if (searchkey == "全国" || searchkey == "不限") {
			$scope.info = $scope.selectlist;
			$scope.visibility1 = false;
		} else {
			$scope.info = [];
			$scope.selectlist1 = [];
			angular.forEach($scope.selectlist[0], function (value, key) {
				if (value.city == searchkey || value.scale == searchkey || value.salary == searchkey || value.companyName == searchkey || value.position == searchkey) {
					$scope.selectlist1.push(value);
				} else {
					$scope.info = [];
				}
				$scope.info.push($scope.selectlist1);
				$scope.searchkey = '';
				$scope.visibility1 = false;
			});
			angular.forEach($scope.info, function (value, key) {
				if (value.length == 0) {
					$scope.visibility1 = true;
				}
			});
		}
	};

	$scope.cancel = function () {
		$scope.info = [];
		$scope.info = $scope.selectlist;
		$scope.searchkey = '';
		$scope.visibility1 = false;
	};
}]);
"use strict";
'use strict';

laGou.directive('appShieldcompany1', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/appShieldcompany1.html'
	};
}]);
'use strict';

laGou.directive('appShieldsearch1', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/appShieldsearch1.html'
	};
}]);
'use strict';

laGou.directive('companyHead', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/companyHead.html',
		scope: {
			data2: '='
		},
		link: function link(scope) {
			//注意这里的scope同$scope效果一样
			scope.back = function () {
				window.history.back();
			};
		}
	};
}]);
'use strict';

laGou.directive('companyOtherjob', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/companyOtherjob.html'
	};
}]);
'use strict';

laGou.directive('companyjobClassfied', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/companyjobClassfied.html'
	};
}]);
'use strict';

laGou.directive('companyInfo', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/companyInfo.html'
	};
}]);
'use strict';

laGou.directive('appFoot', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/foot.html', //注意相对路径是针对index.html的
		scope: {
			data3: "="
		}
	};
}]);
'use strict';

laGou.directive('appHead', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/head.html' //注意相对路径是针对index.html的
	};
}]);
'use strict';

laGou.directive('positionCompanyinfo', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/positionCompanyinfo.html' //注意相对路径是针对index.html的
	};
}]);
'use strict';

laGou.directive('positionDescript', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/positionDescript.html' //注意相对路径是针对index.html的
	};
}]);
'use strict';

laGou.directive('positionDetail', [function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionDetail.html'
		// scope:{
		// 	jobdescriptData:"=",
		// }
	};
}]);
'use strict';

laGou.directive('positionFoot', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/positionFoot.html' //注意相对路径是针对index.html的
	};
}]);
'use strict';

laGou.directive('positionHead', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/positionHead.html',
		scope: {
			data1: '='
		},
		link: function link(scope) {
			//注意这里的scope同$scope效果一样
			scope.back = function () {
				window.history.back();
			};
		}
	};
}]);
'use strict';

laGou.directive('appPositionlist', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		// transclude:true,
		templateUrl: 'view/template/positionlist.html',
		scope: {
			data: '=',
			data1: '=',
			data4: "="
		}
	};
}]);
'use strict';

laGou.directive('searchHead', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/searchHead.html',
		scope: {
			searchkey: "=",
			keysearch: "&",
			cancelsearch: "&"
		}
	};
}]);
'use strict';

laGou.directive('searchList', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/searchList.html',
		scope: {
			searchlistdata: "=",
			finditem: "&"
		}

	};
}]);
'use strict';

laGou.directive('searchNoresult', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		template: '<h1>您的搜索没有结果，请试试其他关键词!</h1>'
	};
}]);
'use strict';

laGou.directive('searchTab', [function () {
	return {
		restrict: 'A', //注意A要大写
		replace: true,
		templateUrl: 'view/template/searchTab.html',
		scope: {
			tabdata: "=",
			searchlistshow: "&"
		}
	};
}]);