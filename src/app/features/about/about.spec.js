(function() {
  'use strict';

  describe('about component', function() {

    var $componentController;
    
    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ ) {
        $componentController = _$componentController_;
    }));

    it('should have a specific sectionTest', function() {
      var vm = $componentController('about', null, null);
      expect(vm.pageData.sectionText).toEqual("About Section");
    });

  });
})();


