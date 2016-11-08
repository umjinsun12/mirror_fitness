angular.module('starter.controllers', ['firebase'])

.controller('VideoCtrl', function($scope, $firebaseArray) {

  //var remote_va = firebase.database().ref().child("remote");
  var ref = firebase.database().ref().child("youtube_video");
  $scope.videos = $firebaseArray(ref);




  $scope.video_fireadd = function(video_input){
      var video_id = video_input.url.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }

      $scope.videos.$add({
            sid : video_input.sid,
            title : video_input.title,
            url : video_id
      });

      video_input.sid = "";
      video_input.title = "";
      video_input.url = "";
  }


})
//VideolistCtrl
.controller('VideolistCtrl', function($scope, $firebaseArray, view_Videos, $firebaseObject){
  var remote_ref = firebase.database().ref().child("remote");
  var ref = firebase.database().ref().child("youtube_video");
  $scope.view_street = $firebaseArray(ref);
  $scope.remote = $firebaseObject(remote_ref);


})

.controller('ViewCtrl', function($scope, $firebaseArray, view_Videos, $firebaseObject){
  var remote_ref = firebase.database().ref().child("remote");
  var ref = firebase.database().ref().child("youtube_video");
  $scope.view_street = $firebaseArray(ref);
  $scope.remote = $firebaseObject(remote_ref);


  $scope.SendUrl = function(url){
    $scope.remote.$loaded().then(function(){
      $scope.remote.youtube_url = url;
      $scope.remote.state = "youtube";
      $scope.remote.$save();
    });
  };

  $scope.Backbtn = function(){
    $scope.remote.$loaded().then(function(){
      $scope.remote.youtube_url = "";
      $scope.remote.state = "main";
      $scope.remote.$save();
    });
  };

})


.controller('MapCtrl', function($scope, $firebaseArray, $firebaseObject) {

  var remote_ref = firebase.database().ref().child("remote");
  var ref = firebase.database().ref().child("youtube_video");
  $scope.view_street = $firebaseArray(ref);
  $scope.remote = $firebaseObject(remote_ref);

  $scope.Backbtn = function(){
    $scope.remote.$loaded().then(function(){
      $scope.remote.youtube_url = "";
      $scope.remote.state = "main";
      $scope.remote.$save();
    });
  };

})

.controller('AppCtrl', function($scope, $firebaseObject,$firebaseArray, $firebaseAuth, $rootScope) {
  var remote_ref = firebase.database().ref().child("remote");
  var ref = firebase.database().ref().child("youtube_video");
  $scope.view_street = $firebaseArray(ref);
  $scope.remote = $firebaseObject(remote_ref);

  $scope.login = function(){
    var auth = $firebaseAuth();

    console.log($rootScope.facebook)
    auth.$signInWithPopup("facebook").then(function(firebaseUser)
    {
      console.log("Sigend in as:", firebaseUser.user);
      $rootScope.facebook = firebaseUser.user;
    }).catch(function(error)
      {
        console.log("Authentication failed:", error);
      });
  }

  $scope.logout = function(){
    var auth = $firebaseAuth();
    auth.$signOut();
  };

  $scope.health_map = function(){
    console.log("구조도를 보자");
    $scope.remote.$loaded().then(function(){
      $scope.remote.youtube_url = "";
      $scope.remote.state = "health_map";
      $scope.remote.$save();
    });
  };

});
