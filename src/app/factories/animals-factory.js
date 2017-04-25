(function (angular) {
    angular.module('app').factory('animalsFactory', [animalsFactory]);



    function animalsFactory() {
        var module = {};
        var self = module;

        var allAnimals = [
            { id: 0, name: 'Gatos', img: 'cats.jpg', type: 'mamiferos' },
            { id: 1, name: 'Camaleones', img: 'camaleones.jpg', type: 'otros' },
            { id: 2, name: 'Perros', img: 'dogs.jpg', type: 'mamiferos' },
            { id: 3, name: 'Hipopótamos', img: 'hipo.jpg', type: 'mamiferos' },
            { id: 4, name: 'Cigüeñas', img: 'ciguenas.jpg', type: 'otros' },
            { id: 5, name: 'Pulpos', img: 'pulpo.jpg', type: 'otros' },
        ];

        module.getAllAnimals = function () {
            return allAnimals;
        }

        module.getAnimalById = function (_id_) {

            var animalById = {
                name: allAnimals[_id_].name,
                img: allAnimals[_id_].img,
                type: allAnimals[_id_].type,
            };
            return animalById;
        }

        module.addLionToList = function () {

            allAnimals.push({
                id: 6, name: 'Leones', img: 'leon.jpg', type: 'otros'
            });

        }

        module.updAnimal = function (_index_, _name_, _type_, _img_) {

console.log('tttt');
            allAnimals[_index_].name=_name_;
            allAnimals[_index_].type=_type_;
            allAnimals[_index_].img=_img_;
            
            
        }        

        module.addAnimalToList = function (_name_, _type_) {
            console.log('Añadiendo Animal desde factoria');

            allAnimals.push({
                id: allAnimals.length, name: _name_, img: _name_+'.jpg', type: _type_
            });

        }        
        return module;

    };


})(angular);