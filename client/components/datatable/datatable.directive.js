'use strict';

angular.module('weatherLoggerApp')
  .directive('datatable', function () {
    return {
      templateUrl: 'components/datatable/datatable.html',
      restrict: 'EA',
      link: function ($scope, element, attrs) {
        $scope.test = [1,2,3,4,5];
        $scope.headers =['HEADER1', 'HEADER2', 'HEADER3'];
      }
    };
  });
