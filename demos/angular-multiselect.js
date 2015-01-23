(function(angular){
    'use strict';
    angular.module('ngDirectives', [])
    .directive('jqueryUiMultiselect', function () {

        return {
            restrict: 'EA',
            link: function ($scope, $element, $attributes) {
                $element.multiselect();
            }
        }
    });
})(angular);