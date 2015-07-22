(function() {
    'use strict';

    var pupilsService = angular.module('pupilsService', ['ngResource']);

    pupilsService.factory('Pupils', [
        '$resource',
        function($resource) {
            return $resource('/api/pupils/', {}, {
                query: { method: 'GET'}
            });
        }
    ]);
})();