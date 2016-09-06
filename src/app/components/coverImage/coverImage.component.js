(function() {
  'use strict';

  /**
     * @ngdoc component
     * @name app.component:coverImage
     *
     * @description
     * A description of the component
     *
     * @param {object}  section       A field object
     * @param {string}  sectionText   A field object
     * @param {string}  logoUrl       A image url
     *
     */
  angular
    .module('app')
    .component('coverImage', {
      templateUrl: 'app/components/coverImage/coverImage.html',
      controller: CoverImageController,
      controllerAs: 'vm',
      bindings:{
        section: '<',
        sectionText: '<',
        logoUrl: '<'
      }
    });
    
    /** @ngInject */
    function CoverImageController() {
      var vm = this;
      switch(vm.section){
        case 'about':
          vm.sectionH1 = "About";
          break;
        case 'home':
          vm.sectionH1 = "Home";  
      }
    }
  
})();