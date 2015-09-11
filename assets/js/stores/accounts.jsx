'use strict';
var React = require('react/addons');
var Reflux = require('reflux');
var request = require('superagent');
var accountActions = require('../actions/account');

var AccountStore = Reflux.createStore({
    listenables: [accountActions],
    init() {
        this.listenTo(accountActions.me, this.currentUser);
    },

    getInitialState: function () {
        this.me = {};
        return this.me;
    },

    currentUser() {
        var self = this;
        request('/auth/me/').end(function (err, res) {
            console.log('Updating User');
            self.me = res.body;
            self.trigger(self.me);
        });
    }
});

module.exports = AccountStore;
