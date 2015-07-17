(function () {
    'use strict';

    angular
        .module('invoicing', [
            'invoicing.config',
            'invoicing.routes',
            'invoicing.layout',
            'invoicing.authentication'
        ]);

    angular
        .module('invoicing.routes', ['ngRoute']);

    angular
        .module('invoicing.config', []);

    angular
        .module('invoicing')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();
