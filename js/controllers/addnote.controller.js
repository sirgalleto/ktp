(function(){
    'use strict';

    angular
    .module('ktp')
    .controller('AddNoteController', AddNoteController);

    function AddNoteController($scope, $mdDialog, Notes, $mdToast) {
        var vmd = this;

        $scope.cancel = function(){
            $mdDialog.cancel();
        };

        $scope.addNote = function(note){
            Notes.create(note).then(function(){
                $mdToast.show(
                    $mdToast.simple()
                    .content('Success')
                    .position('top right')
                    .hideDelay(3000)
                );
                $mdDialog.hide();
            });
        };
    }
})()
