(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:acmeNavbar
     *
     * @description
     * Shows a common navbar.
     *
     * @param {number}  creationDate       Timestamp of app creation date
     */
  angular
    .module('app')
    .component('acmeNavbar', {
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindings: {
          creationDate: '<'
      }
    });

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  

})();
