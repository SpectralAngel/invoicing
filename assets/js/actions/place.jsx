'use strict';
var Reflux = require('reflux');
var request = require('superagent');

var PlaceActions = Reflux.createActions([
    "list",
    "listCompany",
    "add",
    "remove",
    "update"
]);

module.exports = PlaceActions;
