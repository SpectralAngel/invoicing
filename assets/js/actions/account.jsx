'use strict';
var Reflux = require('reflux');

var AccountActions = Reflux.createActions([
    'list',
    'me',
    'add',
    'remove',
    'update'
]);

module.exports = AccountActions;
