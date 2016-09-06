(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:layout
     *
     * @description
     * Give us a basic template for our features home and about 
     *
     * @param {object}  pageData       All data related with the features home and about.
     */
  angular
    .module('app')
    .component('layout', {
      templateUrl: 'app/components/layout/layout.html',
      controllerAs: 'vm',
      bindings:{
        pageData: '<'
      }
    });
  
})();
