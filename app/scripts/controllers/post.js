'use strict';

app.controller('PostsCtrl', function($scope, $location, Post) {
  // Use this condition here so that these posts don't override the users posts on their profile pages
  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }

  $scope.post = {url: 'http://', title: ''};

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

  $scope.upVotePost = function(postId, upVoted) {
    if (upVoted) {
      Post.clearVote(postId, upVoted);
    } else {
      Post.upVote(postId);
    }
  };

  $scope.downVotePost = function(postId, downVoted) {
    if (downVoted) {
      Post.clearVote(postId, !downVoted);
    } else {
      Post.downVote(postId);
    }
  };

  $scope.upVoted = function(post) {
    return Post.upVoted(post);
  };

  $scope.downVoted = function(post) {
    return Post.downVoted(post);
  };

});