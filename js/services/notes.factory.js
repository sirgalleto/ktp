(function(){
    'use strict';

    angular
    .module('ktp')
    .factory('Notes', Notes);

    function Notes($http) {
        var baseUrl = 'http://ktp.herokuapp.com/notes';

        return {
            get: function(id){
                return $http({
                    url: `${baseUrl}/${id || ''}`,
                    method: 'get'
                }).then(function(response){
                    return response.data;
                });
            },
            create: function(note){
                return $http({
                    url: baseUrl,
                    method: 'post'
                }).then(function(response){
                    return response.data;
                });
            }
        }
    }
})();
