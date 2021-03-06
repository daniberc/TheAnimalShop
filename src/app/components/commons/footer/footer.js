(function (angular) {

  angular.module('app').component('viewFooter', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/commons/footer/footer-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', ctrlViewFooter],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'viewFooter'
  });

  /* En esta función escribimos la lógica del controlador */
  function ctrlViewFooter($state) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;

    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */

    vm.goToAbout = function () {

      $state.go('about');
    }
  }

})(angular);