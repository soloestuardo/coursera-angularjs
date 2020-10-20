(function () {
    'use strict';
    
    angular.module('imgApp', [])
    .controller('imgChangeController', imgChangeController);
    imgChangeController.$inject=['$scope']; //* -- Esto es para proteger el codigo de angularjs de la minificación
    function imgChangeController($scope) {
        $scope.stateOfBeing ="pensando";
        $scope.currentMove = "Benji mueve la pieza";
        $scope.benjiPlays = function () {
            if ($scope.stateOfBeing == "pensando") {
                $scope.stateOfBeing ="moviendo";
                $scope.currentMove = "Benji piensa";
            }
            else {
                if ($scope.stateOfBeing == "moviendo") {
                    $scope.stateOfBeing ="pensando";
                    $scope.currentMove = "Benji mueve la pieza";
                }
            }
        };
    };
})();