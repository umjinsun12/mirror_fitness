// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller : 'VideolistCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'MapCtrl'
        }
      }
    })


    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'AppCtrl'
        }
      }
    })


  .state('app.street', {
    url: '/street',
    views: {
      'menuContent': {
        templateUrl: 'templates/street.html',
        controller: 'ViewCtrl'
      }
    }
  })


  .state('app.back', {
    url: '/back',
    views: {
      'menuContent': {
      templateUrl: 'templates/back.html',
      controller: 'ViewCtrl'
      }
    }
  })


  .state('app.chest', {
    url: '/chest',
    views: {
        'menuContent': {
        templateUrl: 'templates/chest.html',
        controller: 'ViewCtrl'
        }
      }
    })


  .state('app.plus', {
    url: '/plus',
    views: {
      'menuContent': {
        templateUrl: 'templates/plus.html',
        controller: 'VideoCtrl'
      }
    }
  })

  .state('app.help', {
    url: '/help',
    views: {
        'menuContent': {
        templateUrl: 'templates/help.html'
        }
      }
    })

    .state('app.manage', {
      url: '/manage',
      views: {
          'menuContent': {
          templateUrl: 'templates/manage.html'
          }
        }
      });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
