// Factory
angular.module('flapperNews', ['ui.router'])
	.factory('posts', [function() {
		var o = {
			posts: []
		};
		return o; 
	}])
	.controller('MainCtrl', [
		'$scope',
		'posts',
		function($scope, posts) {
			$scope.posts = posts.posts;
		}])

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
				});
				$urlRouterProvider.otherwise('home');
		}])



angular.module("flapperNews", ['ui.router']).controller("MainCtrl", ["$scope", 'posts', function($scope, posts){
	$scope.test = "Hello world!";
	$scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 15},
		{title: 'post 4', upvotes: 9},
		{title: 'post 5', upvotes: 4}
	];

	$scope.addPost = function() {
		if(!scope.title || $scope.title === '') { return; }
		$scope.posts.push({title: $scope.title, upvotes: 0});
		$scope.title = ""; //clears input box after post is created
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1; 
	};

	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = '';
		$scope.link	= '';
	};



}]);



















