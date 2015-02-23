describe('test angular multiselect directive', function(){
	beforeEach(module('ngMultiselect'));
	beforeEach(inject(function ($compile, $rootScope) {
		$ngCompile = $compile;
		$ngRootScope = $rootScope;
	}));
	
	describe('instantiation tests', function(){
		var element;
		beforeEach(function(){
			$ngRootScope.selectedItems = [];                
			$ngRootScope.dataset = [
                    { text: 'hello12', value: 12 },
                    { text: 'hello23', value: 23 },
                    { text: 'hello34', value: 34 },
                    { text: 'hello45', value: 45 },
                    { text: 'hello56', value: 56 },
                    { text: 'hello68', value: 68 }
                ];
			$ngRootScope.selectedItems = [$ngRootScope.dataset[0]];
			$ngRootScope.$apply();
			element = $ngCompile(
			'<select multiselect multiple ng-model="selectedItems" ng-options="item.text for item in dataset track by item.value" >'+
			'</select>')($ngRootScope);
			
			$ngRootScope.$apply();
			expect(element).toBeDefined();
		});
		
		it('instantiates a multiselect element', function(){
			expect(element.length > 0).toBe(true);
		});
		
		it('recognizes changes to DOM', function(){
			expect($(element).val()).toEqual(["12"]);
		});
	});
});