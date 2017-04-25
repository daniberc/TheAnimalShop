(function (angular) {

  angular.module('app').component('addAnimal', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/addAnimal/add-animal-template.html',
    // en controller definimos la función que escribimos abajo
    controller:  ['$state', 'animalsFactory', ctrladdAnimal],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'addAnimal'
  });
  /* En esta función escribimos la lógica del controlador */
  function ctrladdAnimal($state, animalsFactory) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;

    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */

    vm.$onInit = function () {
      vm.valuesOK = true;
      vm.nameOK = true;
    }



    vm.addAnimalToList = function () {
      if (!vm.name || !vm.type) {
        vm.valuesOK = false;     
      } else {
        vm.valuesOK = true;
      }
      if (vm.valuesOK) {
        animalsFactory.addAnimalToList(vm.name, vm.type);
        $state.go('main');
      }
    }

    vm.goToMain = function () {
      $state.go('main');
    }
  }
})(angular);