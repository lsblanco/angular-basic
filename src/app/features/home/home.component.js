(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:home
     *
     * @description
     * Feature home. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('home', {
      templateUrl: 'app/features/home/home.html',
      controller: HomeController,
      controllerAs: 'vm'
    });

    /** @ngInject */
    function HomeController(techs, toastr, creation) {
      var vm = this;
      vm.pageData = {
        section: 'home',
        sectionText: 'Frontend Revolution based on opensource',
        creationDate: creation.getDate(),
        contentType: 'techs',
        contentData: getTechs(),
        logoURL: 'assets/images/angular-basic-git.png'
      };
      
      /**
       * @ngdoc function
       * @name app.component#getTechs
       * @methodOf  app.component:home
       * @requires Techs
       * @description
       * Get all guide items using service techs
       * @returns {object} techs
       */
      function getTechs() {
        var techsItems = techs.getTechs();
        var rankCount = 0;
        
        angular.forEach(techsItems, function(awesomeThing) {
          awesomeThing.rank = rankCount;
          rankCount = rankCount++;
        });
        
        toastr.info('Techs Loaded','Info');
        return techsItems;
      }
    }
  
  
})();
