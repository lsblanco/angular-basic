(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:techs
     *
     * @description
     * Shows cards with the technologies.
     *
     * @param {object}  item      Technology information
     */
  angular
    .module('app')
    .component('techs', {
      templateUrl: 'app/components/techs/techs.html',
      controllerAs: 'vm',
      bindings:{
        item: '<'
      }
    });

})();