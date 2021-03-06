(function(){
	'use strict';

	angular.module('blog.services', ['ngResource']);

	var Post = function($resource, BaseUrl) {
		return $resource(BaseUrl + '/posts/:postId', { postId: '@_id' });
	};

	var Comment = function($resource, BaseUrl) {
		return $resource(BaseUrl + '/comments/:commentId', { commentId: '@_id' });
	};

	var User = function($resource, BaseUrl) {
		return $resource(BaseUrl + '/users/:userId', { userId: '@_id' });
	};

	angular.module('blog.services')
		.constant('BaseUrl', 'http://jsonplaceholder.typicode.com' )
		.factory('Post', Post)
		.factory('Comment', Comment)
		.factory('User', User);

})();