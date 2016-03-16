
	

//UI routing
angular.module('flapperNews', ['ui.router'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'MainCtrl'
				})

				.state('posts', {
					url: '/posts/{id}',
					templateUrl: '/posts.html',
					controller: 'PostsCtrl'
			});
				$urlRouterProvider.otherwise('home');
		}])

	



//controllers

	.controller('MainCtrl', [
		'$scope', 
		'posts', 
		function($scope, posts){
			$scope.posts = posts.posts;
		

			$scope.addPost = function() {
				if(!$scope.title || $scope.title === '') { return; }
				$scope.posts.push({
					title: $scope.title, 
					link: $scope.link,
					upvotes: 0,
					comments: [
						{author: 'Joe', body: 'Cool post!', upvotes: 0},
						{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
					]
				});


				$scope.title = ""; //clears input box after post is created
				$scope.link = "";
			};

			$scope.incrementUpvotes = function(post) {
				post.upvotes += 1; 
			};

			
		}])

	.controller('PostsCtrl', [
		'$scope',
		'$stateParams',
		'posts',
		function($scope, $stateParams, posts) {
			$scope.post = posts.posts[$stateParams.id];

			$scope.addComment = function() {
				if($scope.body === '') { return; }
				$scope.post.comments.push({
					body: $scope.body,
					author: 'user',
					upvotes: 0
				});
				$scope.body = '';
			};

	}])


// Factory
	.factory('posts', [function() {
		var o = {
			posts: []
		};
		return o; 
	}]);




















