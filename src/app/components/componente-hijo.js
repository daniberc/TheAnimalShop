(function(angular) {

  angular.module('app').component('componenteHijo', {
    templateUrl: 'app/components/hijo-template.html',
    controller: ['$log', 'demoFactory', controladorCompoHijo],
    controllerAs: 'compoHijo',
    bindings: {
      propiedadCadena: '@',
      propiedadInterpretada: '<',
      metodoPaterno: '&'   
    }
  });

  function controladorCompoHijo($log, demoFactory) {
    var vm = this;

    console.log('DemoFactory: ', demoFactory);
    
    /* Se dispara al finalizar la inicialización */

    vm.$onInit = function() {
      vm.allFilms = demoFactory.getAllFilms();
      
      $log.log("todo listo - log");
    }

    /* Se dispara al realizarse un cambio */
    vm.$onChanges = function() {
      console.log("Hubo cambios");
    }

    /* Se dispara al ser destruido el componente */
    vm.$onDestroy = function() {
      console.log("Kaboomm");
    }

  }

})(angular);

