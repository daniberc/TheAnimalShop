(function (angular) {
    angular.module('app').factory('animalsFactory', [animalsFactory]);



    function animalsFactory() {
        var module = {};
        var self = module;

        var allAnimals = [
            {
                "specie": "Labrador",
                "url": "https://es.wikipedia.org/wiki/Labrador_retriever",
                "origen":"Canadá"
            },
            {
                "specie": "Pastor Alemán",
                "url": "https://es.wikipedia.org/wiki/Pastor_alem%C3%A1n",
                "origen":"Aleman"
            },
            {
                "specie": "Bulldog",
                "url": "https://es.wikipedia.org/wiki/Bulldog",
                "origen":"Reino Unido"
            },
            {
                "specie": "Beagle",
                "url": "https://es.wikipedia.org/wiki/Beagle",
                "origen":"Reino Unido"
            }
        ];
        
        module.getAllAnimals = function () {
            return allAnimals;
        }


        return module;

    };


})(angular);