(function () {
    'use strict';
    
    angular.module('lunchCheck', [])
    .controller('lunchCheckController', lunchCheckController);
    lunchCheckController.$inject=['$scope']; //* -- To protect our code from minification
    function lunchCheckController($scope) {
        $scope.lunchMenu ="";

        //*----------Here's the function that our button calls
        $scope.letsCriticize = function () {
            
            //*----------This 'if' verifies that the 'input' isn't empty. I used a regular expression here.
            if (/^\s*$/.test($scope.lunchMenu)==true) {
                $scope.howMuch = "Please enter data first";
                $scope.fontColor = "text-danger";
                $scope.inputBorder = "border-danger";
            }
            else {
                //--------If the test is successful it will split the items inside and send that array to be counted in the function
                let thisPersonMenu = $scope.lunchMenu.split(',');
                countTheAmount(thisPersonMenu);
            }

            //------------This function counts the amount of items in the array provided and depending on the result changes our '$scope' values
            function countTheAmount(thisPersonMenu) {
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