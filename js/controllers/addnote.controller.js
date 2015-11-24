(function(){
    'use strict';

    angular
    .module('ktp')
    .controller('AddNoteController', AddNoteController);

    function AddNoteController($scope, $mdDialog) {
        var vmd = this;

        $scope.cancel = function(){
            $mdDialog.cancel();
        };

    }
})()
