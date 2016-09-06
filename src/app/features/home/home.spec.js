(function() {
  'use strict';

  describe('home component', function() {

    var $componentController;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ ) {
        $componentController = _$componentController_;
    }));

    it('should have a specific sectionTest', function() {
      var vm = $componentController('home', null, null);
      expect(vm.pageData.sectionText).toEqual("Frontend Revolution based on opensource");
    });
    
  });
})();

