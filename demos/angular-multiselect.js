(function(angular){
    'use strict';
    angular.module('ngMultiselect', [])
    .directive('multiselect', ['$timeout', '$parse', function ($timeout, $parse) {
		var linker = function ($scope, $element, $attributes, ngModel) {

				var options = {};
				if($attributes.msHeader)
					options.header = $attributes.msHeader;
				if($attributes.msHeight)
					options.height = $attributes.msHeight;
				if($attributes.msMinWidth)
					options.minWidth = $attributes.msMinWidth;
				if($attributes.msCheckAllText)
					options.checkAllText = $attributes.msCheckAllText;
				if($attributes.msUncheckAllText)
					options.uncheckAllText = $attributes.msUncheckAllText;
				if($attributes.msNoneSelectedText)
					options.noneSelectedText = $attributes.msNoneSelectedText;
				if($attributes.msSelectedText)
					options.selectedText = $attributes.msSelectedText;
				if($attributes.msSelectedList)
					options.selectedList = $attributes.msSelectedList;
				if($attributes.msShow)
					options.show = $attributes.msShow && $parse($attributes.msShow)($scope) || "";
				if($attributes.msHide)
					options.hide = $attributes.msHide && $parse($attributes.msHide)($scope) || "";
				if($attributes.msAutoOpen)
					options.autoOpen = $attributes.msAutoOpen && $parse($attributes.msAutoOpen)() || false;
				if($attributes.msMultiple)
					options.multiple = $attributes.msMultiple && $parse($attributes.msMultiple)();
				
				$scope.$watch($attributes.ngModel, function(modelValue){
					// wait till next cycle to load refreshed data onto DOM
					$timeout(function(){
						$element.multiselect('refresh');
					}, 0 , false)
				});
				
				
				
				$element.multiselect(options);
            };
        return {
            restrict: 'EA',
			require: '?ngModel',
            link: linker
        }
    }]);
})(angular);