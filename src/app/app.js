'use strict';

(function (angular) {
  /* Declaramos el módulo e inyectamos el router*/
  // npm install --save angular-ui-router
  angular.module('app', ['ui.router']);

  // Definimos la configuración del proyecto durante la fase CONFIG
  // Necesitamos inyectar algunos "providers" del router
  // Declaramos tantos estados como pantallas tengamos
  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {

    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var detail = {
      name: 'detail',
      url: '/detail/:idAnimal',
      params: {
        idAnimal: { squash: true, value: null }
      },
      template: '<view-detail></view-detail>'
    };

    var about = {
      name: 'about',
      url: '/about',
      template: '<h3>About me</h3>'
    };

    var addLion = {
      name: 'addLion',
      url: '/addLion',
      template: '<add-lion></add-lion>' 
    };

    var addAnimal = {
      name: 'addAnimal',
      url: '/addAnimal',
      template: '<add-animal></add-animal>' 
    };    

    var updAnimal = {
      name: 'updAnimal',
      url: '/updAnimal',
      template: '<upd-animal></upd-animal>' 
    };  

    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $stateProvider.state(addLion);
    $stateProvider.state(addAnimal);
    $stateProvider.state(updAnimal);

    // Definimos una ruta por defecto
    $urlRouterProvider.otherwise('/main');

  };




})(angular);