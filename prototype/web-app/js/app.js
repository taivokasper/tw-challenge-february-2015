var app = angular.module('app', ['ngResource', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/index.html',
            controller: 'IndexCtrl'
        })
        .state('pay', {
            url: '/pay',
            templateUrl: 'views/pay.html',
            controller: 'PayCtrl'
        });
});