(function () {
    'use strict';
    angular.module('nameCalculator', [])
    .controller('nameCalculatorController', function ($scope) {
       $scope.name = "";
       $scope.totalValue = 0;

       $scope.displayNumeric = function () {
           let totalNameValue = calculateNumericFromString($scope.name);
           $scope.totalValue = totalNameValue;
       };

       function calculateNumericFromString(string) {
           let totalStringValue = 0;
           for (let i=0; i < string.length; i++) {
               totalStringValue += string.charCodeAt(i);
           }
           return totalStringValue;
       }
    });
    
})();