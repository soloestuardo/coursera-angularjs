(function () {
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function ($scope) {
        $scope.name ="Estuardo";
        $scope.sayHello = function () {
            return "Hola Coursera!";
        }
    });
})();