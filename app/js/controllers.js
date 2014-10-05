(function(){
	'use strict';

	angular.module('blog.controllers', ['blog.services']);

	var PostListCtrl = function(Posts) {
		this.posts = Posts.query();
	};

	var PostDetailCtrl = function ($routeParams, Post, Comment, User) {
		this.post = {};
		this.comments = {};
		this.user = {};
		var self = this; // Para guardar la referencia
		
		Post.query({ id: $routeParams.postId })
			.$promise.then(
				//Success
				function (data) {
					self.post = data[0];
					self.user = User.query({ id: self.user.userId });
				},
				//Error
				function (error) {
					console.log(error);
				}
			);
		
		this.comments = Comment.query({ postId: $routeParams.postId });
	};

	var PostCreateCtrl = function(Post) {
		var self = this;

		this.create = function() {
			Post.save(self.post);
		};
		
	};

	angular.module('blog.controllers')
		.controller('PostListCtrl', PostListCtrl)
		.controller('PostCreateCtrl', PostCreateCtrl)
		.controller('PostDetailCtrl', PostDetailCtrl);

})();