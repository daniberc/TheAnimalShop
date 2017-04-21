(function(angular) {

  angular.module('app').component('viewHeader', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/commons/header/header-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ctrlViewHeader,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'viewHeader'
  });

 /* En esta función escribimos la lógica del controlador */
  function ctrlViewHeader() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
      vm.foo = 'Soy una propiedad';
console.log("init Header");
     }
  }

  })(angular);