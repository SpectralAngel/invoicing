(function (){
   'use strict';

    angular
        .module('invoicing.costumers', [
            'invoicing.costumers.controllers',
            'invoicing.costumers.directives',
            'invoicing.costumers.services'
        ]);

    angular
        .module('invoicing.costumers.controllers', []);
    angular
        .module('invoicing.costumers.directives', ['ngDialog']);
    angular
        .module('invoicing.costumers.services', []);
})();
