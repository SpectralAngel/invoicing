'use strict';
var Reflux = require('reflux');
var request = require('superagent');

var CostumerActions = Reflux.createActions([
    "list",
    "listAccount",
    "add",
    "remove",
    "update"
]);

module.exports = CostumerActions;
