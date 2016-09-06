(function() {
  'use strict';

  describe('guideItem component', function() {

    
    var $componentController;
    var guideItems;
    var item;
    var bindings;

    
    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ , _guideItems_) {
        $componentController = _$componentController_;
        //Getting data from the service
        guideItems = _guideItems_; 
        var itemList = guideItems.getItems();
        item = itemList[0];
        //Defining the binding for the component data
        bindings = {item: item};
    }));
      
    it('shouldnt have a Item like functionality by default ', function() {
        // Here we are passing actual bindings to the component
        var vm = $componentController('guideItem', null, bindings);
        expect(vm.item.like).toEqual(false);
    });

    it('should have a Item like functionality ', function() {
        // Here we are passing actual bindings to the component
        var vm = $componentController('guideItem', null, bindings);
        vm.setItemLike(vm.item);
        expect(vm.item.like).toEqual(true);
        vm.setItemLike(vm.item);
        expect(vm.item.like).toEqual(false);
    });
    
  });
})();
