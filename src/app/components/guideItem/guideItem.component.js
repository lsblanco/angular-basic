(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:guideItem
     *
     * @description
     * This component shows cards using the item binding for his own building.
     *
     * @param {object}  item      A object with card data
     */
  angular
    .module('app')
    .component('guideItem', {
      templateUrl: 'app/components/guideItem/guideItem.html',
      controller: GuideItemController,
      controllerAs: 'vm',
      bindings:{
          item : '<'
      }
    });

    /** @ngInject */
    function GuideItemController() {
      var vm = this;
      vm.setItemLike = setItemLike;
      
      /**
       * @ngdoc function
       * @name app.component#setItemLike
       * @methodOf  app.component:guideItem
       * @description
       * Set and unset an item like.
       *
       * @param {object}  item      A object with card data
       */
      function setItemLike( item ){
        item.like = item.like === true ? false : true;
      }
    }
  
})();