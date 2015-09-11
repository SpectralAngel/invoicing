'use strict';
var Reflux = require('reflux');
var request = require('superagent');

var CompanyActions = Reflux.createActions([
    "list",
    "listAccount",
    "add",
    "remove",
    "update"
]);

module.exports = CompanyActions;
