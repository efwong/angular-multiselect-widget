(function(angular){
    'use strict';
    angular.module('ngMultiselect', [])
    .directive('multiselect', ['$timeout', '$parse', function ($timeout, $parse) {
		var linker = function ($scope, $element, $attributes, ngModel) {
				
				// options for multiselect
				var name = $attributes.name || '';
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
					options.show = $attributes.msShow && $parse($attributes.msShow)($scope) || '';
				if($attributes.msHide)
					options.hide = $attributes.msHide && $parse($attributes.msHide)($scope) || "";
				if($attributes.msAutoOpen)
					options.autoOpen = $attributes.msAutoOpen && $parse($attributes.msAutoOpen)() || false;
				if($attributes.msMultiple)
					options.multiple = $attributes.msMultiple && $parse($attributes.msMultiple)();
				
				// events for multiselect
				if($attributes.msOpen)
					options.open = $attributes.msOpen && $parse($attributes.msOpen)($scope);
				if($attributes.msBeforeOpen)
					options.beforeopen = $attributes.msBeforeOpen && $parse($attributes.msBeforeOpen)($scope);
				if($attributes.msBeforeClose)
					options.beforeclose = $attributes.msBeforeClose && $parse($attributes.msBeforeClose)($scope);
				if($attributes.msClose)
					options.close = $attributes.msClose && $parse($attributes.msClose)($scope);
				if($attributes.msCheckAll)
					options.checkAll = $attributes.msCheckAll && $parse($attributes.msCheckAll)($scope);
				if($attributes.msUncheckAll)
					options.uncheckAll = $attributes.msUncheckAll && $parse($attributes.msUncheckAll)($scope);
				if($attributes.msClick)
					options.click = $attributes.msClick && $parse($attributes.msClick)($scope);
				
				$scope.$watch($attributes.ngModel, function(modelValue){
					// wait till next cycle to load refreshed data onto DOM
					$timeout(function(){
						$element.multiselect('refresh');
					}, 0 , false)
				});
				
				if($attributes.name)
				{
					$scope.$on(name, function(event, args){
						var method = args.method;
						if(method){
							$element.multiselect(args.method);
						}
						else{
							console.error('Method "' + method + '" "does not exist')
						}
					});				
				}
				
				$element.multiselect(options);
            };
        return {
            restrict: 'EA',
			require: '?ngModel',
            link: linker
        }
    }]);
})(angular);