var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/messages', {
        templateUrl: 'templates/messages.html',
        controller: 'MessegesController'
      })
    })
