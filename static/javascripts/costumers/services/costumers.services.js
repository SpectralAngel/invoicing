/**
 * Costumers
 * @namespace invoicing.costumers.services
 */
(function (){
    'use strict';

    angular
        .module('invoicing.costumers.services')
        .factory('Costumers', Costumers);

    Costumers.$inject = ['$http'];

    /**
     * @namespace Costumers
     * @returns {Factory}
     */
    function Costumers($http) {
        var Costumers = {
            all : all,
            create: create,
            get: get
        };

        return Costumers;

        /**
         * @name all
         * @desc Get all Costumers
         * @returns {Promise}
         * @memberOf invoicing.costumers.services.Costumers
         */
        function all() {
            return $http.get('/ap1/v1/costumers');
        }

        /**
         * @name create
         * @desc Create a new Costumer
         * @param {string} content The content of the new Post
         * @returns {Promise}
         * @memberOf invoicing.costumers.services.Costumers
         */
        function create(content) {
            return $http.post('/api/v1/costumers/', {
                content: content
            });
        }

        /**
         * @name get
         * @desc Get the Posts of a given user
         * @param {string} username The username to get Posts for
         * @returns {Promise}
         * @memberOf invoicing.costumers.services.Costumers
         */
        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/costumers/');
        }
    }
});
