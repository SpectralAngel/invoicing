(function () {
    'use strict';

    angular
        .module('invoicing.authentication', [
            'invoicing.authentication.controllers',
            'invoicing.authentication.services'
        ]);

    angular
        .module('invoicing.authentication.controllers', []);

    angular
        .module('invoicing.authentication.services', ['ngCookies']);
})();
