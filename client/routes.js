angular.module('planet-facts').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/Home/home.html',
      controller: 'HomeCtrl as hc'
    })
    .state('author', {
      url: '/author/:author',
      templateUrl: 'client/Author/author.html',
      controller: 'AuthorCtrl as ac'
    })
    .state('planet', {
      url: '/planet/:planet',
      templateUrl: 'client/Planet/planet.html',
      controller: 'PlanetCtrl as pc'
    });

  $urlRouterProvider.otherwise('/');
});
