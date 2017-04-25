(function (angular) {

    angular.module('app').component('updAnimal', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/updAnimal/upd-animal-template.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'animalsFactory', ctrlUpdAnimal],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'updAnimal'
    });
    /* En esta función escribimos la lógica del controlador */
    function ctrlUpdAnimal($state, animalsFactory) {
        /* Cacheamos this para evitar rarismos */
        var vm = this;

        /* Este método equivale al $( document ).ready() de jQuery.
        En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */

        vm.$onInit = function () {
            vm.animalSelected = false;
            vm.formSend = false;
            vm.showMsg = false;
            vm.allAnimals = {}
            vm.allAnimals = animalsFactory.getAllAnimals();
        }

        vm.updAnimal = function () {
            console.log('se actualiza el animal');
            vm.formSend = true;
            if (!vm.nameUpdAnimal || !vm.typeUpdAnimal || !vm.imgUpdAnimal) {
                vm.showMsg = true;
            } else {
                vm.showMsg = false;
            }

            if(!vm.showMsg) {
                animalsFactory.updAnimal(vm.idUpdAnimal, vm.nameUpdAnimal, vm.typeUpdAnimal, vm.imgUpdAnimal);
                $state.go('main');
            }

        }


        vm.editAnimal = function (_id_) {
            vm.animalSelected = true;
            vm.animalToUpdate = animalsFactory.getAnimalById(_id_);
            console.log('nombre animal', vm.animalToUpdate.name);
            vm.idUpdAnimal = _id_;
            vm.nameUpdAnimal = vm.animalToUpdate.name;
            vm.typeUpdAnimal = vm.animalToUpdate.type;
            vm.imgUpdAnimal = vm.animalToUpdate.img;

        }

        vm.goToMain = function () {
            $state.go('main');
        }
    }
})(angular);