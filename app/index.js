angular
.module('stalker', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {url:'/', templateUrl:'views/home.html'})
      .state('search', {url:'/search', templateUrl:'views/search.html', controller:'SearchCtrl'})
      .state('about', {url:'/about', templateUrl:'views/about.html'});
  });
