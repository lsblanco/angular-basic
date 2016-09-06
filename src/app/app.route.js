
(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /
    $urlRouterProvider.otherwise('/home');    
  }
})();
