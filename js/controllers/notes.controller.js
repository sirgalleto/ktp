(function(){
    'use strict';

    angular
    .module('ktp')
    .controller('NotesController', NotesController);

    function NotesController(Notes) {
        var vm = this;

        construct();

        function construct() {
            Notes.get().then(function(data){
                vm.notes = data;
            });
        }
    }
})();
