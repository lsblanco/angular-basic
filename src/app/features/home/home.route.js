(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider) {    
    $stateProvider
        .state('home', {
          url: '/home',
          template: '<home></home>'
        });              
  }

})();
