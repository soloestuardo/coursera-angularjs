(function () {
    'use strict';
    
    angular.module('lunchCheck', [])
    .controller('lunchCheckController', lunchCheckController);
    lunchCheckController.$inject=['$scope']; //* -- To protecto our code from minification
    function lunchCheckController($scope) {
        $scope.lunchMenu ="";
        //*----------Here's the function that our button calls
        $scope.letsCriticize = function () {
            
            //*----------If the input is blank or just spaces, it will display an alert. I used a regular expression here.
            if (/^\s*$/.test($scope.lunchMenu)==true) {
                $scope.howMuch = "Please enter data first";
                $scope.fontColor = "text-danger";
                $scope.inputBorder = "border-danger";
            }
            else {
                countTheAmount();
            }

            //TODO Usar '.filter()' para eliminar los datos en blanco del array

            function countTheAmount() {
                const thisPersonMenu = $scope.lunchMenu.split(',');
                if (thisPersonMenu.length <= 3) {
                    $scope.howMuch ="Enjoy!";
                    $scope.fontColor = "text-success";
                    $scope.inputBorder = "border-success";
                }
                else {
                    $scope.howMuch ="That's too much.";
                    $scope.fontColor = "text-warning";
                    $scope.inputBorder = "border-warning";
                }
                console.log(thisPersonMenu);
            }
        }
    };
})();