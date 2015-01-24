(function(angular){
    'use strict';
    angular.module('ngMultiselect', [])
    .directive('jqueryUiMultiselect', function () {
		var template =  '<div><select multiple="multiple" ng-model="ngModel" ng-options="item.text for item in optionList track by item.value"></select></div>';
        return {
            restrict: 'EA',
			require: 'ngModel',
			replace:true,
			scope:{
				//ngModel: '=',
				optionList: '='
			},
            link: function ($scope, $element, $attributes, ngModel) {
				
				ngModel.$render = function(){
					console.log('rendering');
					
				}
				
				$scope.$watch($attributes.ngModel, function(modelValue){
					ngModel.$setViewValue(modelValue);
					$element.multiselect('refresh');	
					alert('hello');
				});
				
				
				
				$element.multiselect();	
            },
			template: template
        }
    });
})(angular);