(function(){
    'use strict';

    angular
    .module('ktp', ['ui.router', 'ngMaterial'])
    .config(config)
    .run(run);

    function config($stateProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');

        $stateProvider
        .state('home', {
            url: '',
            controller: 'NotesController as vm',
            templateUrl: 'views/notes.tpl.html'
        });
    }

    function run($log) {
        $log.log('KTP it\'s running');
    }
})();
