(function(angular) {

  angular.module('app').component('animalsCard', {
    templateUrl:  'app/components/viewMain/animal-card/animal-card-template.html',
    controller: animalsCard,
    controllerAs: 'animalsCard',
    bindings: {
      itemAnimal: '<'
    }
  });

  function animalsCard() {
    var vm = this;

        // Al clicar sobre un elemento de la lista, nos vamos al detalle

  }

})(angular);
