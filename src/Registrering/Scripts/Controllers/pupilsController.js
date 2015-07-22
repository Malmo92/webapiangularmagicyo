(function () {
    'use strict';

    angular
        .module('app')
        .controller('pupilsController', pupilsController);

    pupilsController.$inject = ['$scope', 'Pupils']; 

    function pupilsController($scope, Pupils) {
        /* jshint validthis:true */
        //var vm = this;
        $scope.title = 'pupilsController';



        //vm.title = 'pupilsController';

        activate();

        function activate() { }
    }
})();
