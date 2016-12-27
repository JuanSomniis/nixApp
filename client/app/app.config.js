'use strict';

export function routeConfig($urlRouterProvider, $locationProvider,$mdThemingProvider,cfpLoadingBarProvider) {
  'ngInject';
  cfpLoadingBarProvider.includeSpinner = false;
  $urlRouterProvider.otherwise('/');
  $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('orange');
  $locationProvider.html5Mode(true);
}
