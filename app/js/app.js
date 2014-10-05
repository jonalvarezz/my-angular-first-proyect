(function(){
	'use strict';

	angular.module('blog', ['ngRoute', 'blog.controllers']);

	var config = function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'views/post-list.tpl.html',
				controller: 'PostListCtrl',
				controllerAs: 'postlist'
			})
			.when('/new', {
				templateUrl: 'views/post-create.tpl.html',
				controller: 'PostCreateCtrl',
				controllerAs: 'postcreate'
			})
			.when('/post/:postId', {
				templateUrl: '../views/post-details.tpl.html',
				controller: 'PostDetailCtrl',
				controllerAs: 'postdetail'
			});
	};

	angular.module('blog').config(config);

})();