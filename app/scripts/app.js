'use strict';

/**
 * @ngdoc overview
 * @name paginationAngularjsApp
 * @description
 * # paginationAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('customerprofile-pagination-app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid', 
    'ui.grid.pagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/features/customerprofile/customerprofilegrid.html',
        controller: 'CustomerprofileController',
        controllerAs: 'Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
