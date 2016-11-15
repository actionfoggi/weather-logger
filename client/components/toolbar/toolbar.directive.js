'use strict';

angular.module('weatherLoggerApp')
  .directive('toolbar', function () {
    return {
      templateUrl: 'components/toolbar/toolbar.html',
      restrict: 'EA',
      // link: function (scope, element, attrs) {
      // }
    };
  });
