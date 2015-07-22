/**
 * Costumer
 * @namespace invoicing.costumers.directives
 */
(function () {
    'use strict';

    angular
        .module('invoicing.costumers.directives')
        .directive('costumer', costumer);

    /**
     * @namespace Costumer
     */
    function costumer() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf invoicing.costumer.directives.Costumer
         */
        var directive = {
            restrict: 'E',
            scope: {
                costumer: '='
            },
            templateUrl: '/static/templates/costumers/costumer.html'
        };

        return directive;
    }
})();
