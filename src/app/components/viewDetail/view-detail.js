(function (angular) {

  angular.module('app').component('viewDetail', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/viewDetail/view-detail-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$stateParams', 'animalsFactory', ctrlViewDetail],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'viewDetail',
    bindings: {
      detailAnimal: '<'
    }

  });
  /* En esta función escribimos la lógica del controlador */
  function ctrlViewDetail($stateParams, animalsFactory) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;

    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */

    vm.$onInit = function () {
      var idAnimal = $stateParams.idAnimal;
      vm.detailAnimal = animalsFactory.getAnimalById(idAnimal);
    }

  }
})(angular);