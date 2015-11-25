(function(){
    'use strict';

    angular
    .module('ktp')
    .controller('AddNoteController', AddNoteController);

    function AddNoteController($scope, $mdDialog, Notes) {
        var vmd = this;

        $scope.cancel = function(){
            $mdDialog.cancel();
        };

        $scope.addNote = function(note){
            Notes.create(note).then(function(){
                 $mdDialog.hide();
            });
        };
    }
})()
