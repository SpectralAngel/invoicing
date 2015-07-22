/**
 * IndexController
 * @namespace invoicing.layout.controllers
 */
(function () {
    'use strict';

    angular
        .module('invoicing.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Authentication', 'Costumers', 'Snackbar'];

    /**
     * @namespace IndexController
     */
    function IndexController($scope, Authentication, Costumers, Snackbar) {
        var vm = this;

        vm.isAuthenticated = Authentication.isAuthenticated();
        vm.costumers = [];

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf invoicing.layout.controllers.IndexController
         */
        function activate() {
            Costumers.all().then(costumersSuccessFn, costumersErrorFn);

            $scope.$on('costumer.created', function (event, costumer) {
                vm.costumers.unshift(costumer);
            });

            $scope.$on('costumer.created.error', function () {
                vm.costumers.shift();
            });


            /**
             * @name costumersSuccessFn
             * @desc Update costumers array on view
             */
            function costumersSuccessFn(data, status, headers, config) {
                vm.costumers = data.data;
            }


            /**
             * @name costumersErrorFn
             * @desc Show snackbar with error
             */
            function costumersErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }
    }
})();
