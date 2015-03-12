angular
.module('stalker', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('home', {url:'/', templateUrl:'public/views/home.html'})
      .state('search', {url:'/search', templateUrl:'public/views/search.html', controller:'SearchCtrl'})
      .state('about', {url:'/about', templateUrl:'public/views/about.html'});
  });
