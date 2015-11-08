'use strict';

/**
 * @ngdoc overview
 * @name angularSampleApp
 * @description
 * # angularSampleApp
 *
 * Main module of the application.
 */
var app = angular.module('angularSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'ChatController',
      controllerAs: 'chat'
    })
    .when('/todo', {
      templateUrl: 'views/todo.html',
      controller: 'TodoController',
      controllerAs: 'todo'
    })
    .otherwise({
      redirectTo: '/'
    });
});