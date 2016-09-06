(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:about
     *
     * @description
     * Feature about. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('about', {
      templateUrl: 'app/features/about/about.html',
      controller: AboutController,
      controllerAs: 'vm'
    });

    /** @ngInject */
    function AboutController(guideItems, toastr, creation) {
      var vm = this;
      vm.pageData = {
        section: 'about',
        sectionText: 'About Section',
        creationDate: creation.getDate(),
        contentType: 'guide-item',
        contentData: getGuides(),
        logoURL: 'assets/images/serenity/serenity.png'
      };
      
      /**
       * @ngdoc function
       * @name app.component#getGuides
       * @methodOf  app.component:about
       * @requires guideItem
       * @description
       * Get guides using service guideItems
       * @returns {object} guideItems
       */
      function getGuides() {
        toastr.info('Guide Items Loaded','Info');
        return guideItems.getItems();
      }
    }
  
})();