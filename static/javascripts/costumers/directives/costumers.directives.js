/**
 * Costumers
 * @namespace invoicing.costumers.directives
 */
(function () {
    'use strict';

    angular
        .module('invoicing.costumers.directives')
        .directive('costumers', costumers);

    /**
     * @namespace Costumers
     */
    function costumers() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf invoicing.costumers.directives.Costumers
         */
        var directive = {
            controller: 'CostumersController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                costumers: '='
            },
            templateUrl: '/static/templates/costumers/costumers.html'
        };

        return directive;
    }
})();
