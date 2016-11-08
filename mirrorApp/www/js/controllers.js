angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope, $state,$firebaseObject, $firebaseArray) {


  var remote_ref = firebase.database().ref().child("remote");
  $scope.remote = $firebaseObject(remote_ref);


  $scope.remote.$watch(function(){
    console.log($scope.remote.state);

    if($scope.remote.state == "youtube"){
      $state.go('tab.account');
    }

    if($scope.remote.state == "health_map"){
      $state.go('tab.chats');
    }
  });



  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 10000,
    autoplay : true
  }


  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    $scope.activeIndex = data.slider.activeIndex;
    $scope.previousIndex = data.slider.previousIndex;
  });

})

.controller('ChatsCtrl', function($scope, $state, Chats, $firebaseObject) {

  var remote_ref = firebase.database().ref().child("remote");
  $scope.remote = $firebaseObject(remote_ref);

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.remote.$loaded().then(function(){
    if($scope.remote.state == "main"){
      $state.go('tab.dash');
    }
   });

  $scope.remote.$watch(function(){
    if($scope.remote.state == "main"){
      $state.go('tab.dash');
    }
  });

})

.controller('ChatDetailCtrl', function($scope, $state, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $state,$firebaseObject) {
  var remote_ref = firebase.database().ref().child("remote").child("state");
  $scope.remote = $firebaseObject(remote_ref);




 $scope.remote.$loaded().then(function(){
   if($scope.remote == "main"){
     console.log("메인으로 갑시다");
     $state.go('tab.dash');
   }
  });

   $scope.remote.$watch(function(){
      console.log($scope.remote);
       if($scope.remote.$value == "main"){
         console.log("메인으로 갑시당");
         $state.go('tab.dash');
       }
   });



   $scope.playVideo = function() {
            var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
           iframe.postMessage('{"event":"command","func":"' + 'playVideo' +   '","args":""}', '*');
    };

    $scope.pauseVideo = function() {
            var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
           iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
    };

    $scope.youtube_pause = function(){
       console.log("영상 정지");
       $scope.pauseVideo();
    };

    $scope.$on('$ionicView.beforeLeave', function(){
           $scope.pauseVideo();
       });

       $scope.$on('$ionicView.enter', function(){
           $scope.playVideo();
       });



});
