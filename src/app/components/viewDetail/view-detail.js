(function(angular) {

  angular.module('app').component('viewDetail', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/commons/viewDetail/view-detail-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ctrlViewDetail,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'viewDetail'
  });
 /* En esta función escribimos la lógica del controlador */
  function ctrlViewDetail() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
      vm.foo = 'Soy una propiedad';
    }
  }
  })(angular);