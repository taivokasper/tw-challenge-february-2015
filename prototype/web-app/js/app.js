var app = angular.module('app', ['ngResource', 'ui.router', 'angular-stripe']);

app.config(function($stateProvider, $urlRouterProvider, stripeProvider) {

    stripeProvider.setPublishableKey('pk_test_YBhgPZshRp7d8eZ1kb7SjxNT');

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