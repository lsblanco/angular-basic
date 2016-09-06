(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock(toastr) {
    toastr.info("Application kickstart","Info");
  }

})();
