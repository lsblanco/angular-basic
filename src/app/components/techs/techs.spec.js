(function() {
  'use strict';

  describe('techs component', function() {

    var $componentController;
    var techs;
    var item;
    var bindings;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ , _techs_) {
        $componentController = _$componentController_;
        //Getting data from the service
        techs = _techs_; 
        var itemList = techs.getTechs();
        item = itemList[0];
        //Defining the binding for the component data
        bindings = {item: item};
    }));

        it('should have data from the service ', function() {
            // Here we are passing actual bindings to the component
            var vm = $componentController('techs', null, bindings);
            //Check if the binding is working
            expect(vm.item.url).toBe(item.url);
        });
    
  });
})();

