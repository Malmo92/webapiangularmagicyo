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

        $scope.pupils = Pupils.query();

        alert($scope.pupils[0]);

        //vm.title = 'pupilsController';

        activate();

        function activate() { }
    }
})();
