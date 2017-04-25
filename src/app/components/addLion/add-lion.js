(function (angular) {

  angular.module('app').component('addLion', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/addLion/add-lion-template.html',
    // en controller definimos la función que escribimos abajo
    controller:  ['$scope', '$state', 'animalsFactory', ctrladdLion],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'addLion'
  });
  /* En esta función escribimos la lógica del controlador */
  function ctrladdLion($scope, $state, animalsFactory) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;

    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */

    vm.$onInit = function () {

    }

    vm.addLionToList = function () {
//console.log("User logged in with membership no: " + $scope.formData.membershipNo +
//  "\n and password: " + $scope.formData.password);
      animalsFactory.addLionToList();
      $state.go('main');
    }
    vm.goToMain = function () {
      $state.go('main');
    }
  }
})(angular);