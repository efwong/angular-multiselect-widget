(function(angular){
    'use strict';
    angular.module('ngMultiselect', [])
    .directive('multiselect', ['$timeout', function ($timeout) {
		var linker = function ($scope, $element, $attributes, ngModel) {
				
				ngModel.$render = function(){
					console.log('rendering');
				}
				
				$scope.$watch($attributes.ngModel, function(modelValue){
					//if(!modelValue)
					//{
					//	ngModel.$setViewValue({ selected: [] });
					//	return;
					//}
					
					// wait till next cycle to load refreshed data onto DOM
					$timeout(function(){
						$element.multiselect('refresh');
					}, 0 , false)
					//ngModel.$render();
				});
				
				
				
				$element.multiselect({
					click: function(event, ui){
						$scope.$apply(function () {
							//ngModel.$viewValue.push({ id: ui.value })
							//ngModel.$setViewValue({ id: ui.value });
							ngModel.$render();
							var test = $attributes;
						});
					}
				});
            };
        return {
            restrict: 'EA',
			require: '?ngModel',
            link: linker
        }
    }]);
})(angular);