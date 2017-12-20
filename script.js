var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Stelios", surname: "Serefidis", profession: "Mathimatician", age: "29" },
                { name: "Pantelis", surname: "Patras", profession: "Retired", age: "68" },
                { name: "Markos", surname: "Malamidis", profession: "Filologos", age: "50" },
                { name: "Aspasia", surname: "Antwniadou", profession: "Secratary", age: "32" },
                { name: "Aggelos", surname: "Kwnstantas", profession: "Mechanical Engineer", age: "28" },
            ];

            $scope.employees = employees;

            
        });