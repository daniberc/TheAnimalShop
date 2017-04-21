(function(angular) {

  angular.module('app').component('listAnimals', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/viewMain/listAnimals/list-animals-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['animalsFactory', listAnimals],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'listAnimals'
  });

 /* En esta función escribimos la lógica del controlador */
  function listAnimals(animalsFactory) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
  
      
      vm.AllAnimals = animalsFactory.getAllAnimals();

     }
  }

  })(angular);