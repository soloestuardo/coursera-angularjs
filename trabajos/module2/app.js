(function () {
    'use strict';

    angular.module("shoppingListCheckOff", [])
    .controller('toBuyController', toBuyController)
    .controller('alreadyBoughtController', alreadyBoughtController)
    .service('shoppingListService', shoppingListService);

    //*----------Aquí va el controlador para la lista a comprar
    toBuyController.$inject = ['shoppingListService'];
    function toBuyController(shoppingListService) {
        const toBuy = this;
        toBuy.items = shoppingListService.needsToBuy();
        toBuy.bought = function (itemPos) {
            shoppingListService.bought(itemPos);
        }
        toBuy.checkList = shoppingListService.checkToBuyList();
    }

    //*----------Aquí va el controlador para la lista ya comprada
    alreadyBoughtController.$inject = ['shoppingListService'];
    function alreadyBoughtController(shoppingListService) {
        const justBought = this;
        justBought.items = shoppingListService.alreadyBought();
        justBought.checkList = shoppingListService.checkAlreadyBoughtList();
    }

    //*----------Aquí va el servicio para las listas
    function shoppingListService() {
        let service = this;
        let needsToBuyList = [
            {
                name: "leche",
                quantity: "1 lb"
            },
            {
                name: "longaniza",
                quantity: "2 bandejas"
            },
            {
                name: "huevos",
                quantity: "1 cartón"
            },
            {
                name: "chocolate",
                quantity: "1 barra"
            },
            {
                name: "café",
                quantity: "1 lb"
            },
            {
                name: "margarina",
                quantity: "1 paquete"
            },
            {
                name: "tortillas de harina",
                quantity: "1 bolsa"
            },
            {
                name: "aceite",
                quantity: "1 spray"
            },
            {
                name: "curitas",
                quantity: "1 paquete"
            },
            {
                name: "azúcar",
                quantity: "1/2 lb"
            },
        ];

        let alreadyBoughtList = [];

        service.bought = function (itemPos) {
            console.log(needsToBuyList.length);
            console.log(alreadyBoughtList.length);
            let boughtItem = needsToBuyList.splice(itemPos, 1);
            alreadyBoughtList.push(boughtItem[0]);
            console.log(needsToBuyList.length);
            console.log(alreadyBoughtList.length);
            console.log(service.checkToBuyList());
            console.log(service.checkAlreadyBoughtList());   
        };

        service.checkToBuyList = function () {
            return needsToBuyList.length === 0;
        };

        service.checkAlreadyBoughtList = function () {
            return alreadyBoughtList.length === 0;
        }

        service.needsToBuy = function () {
            return needsToBuyList;
        };

        service.alreadyBought = function () {
            return alreadyBoughtList;
        };
    }
})();