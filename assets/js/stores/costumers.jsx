'use strict';
var React = require('react/addons');
var Reflux = require('reflux');
var request = require('superagent');
var costumerActions = require('../actions/costumer');
var accountStore = require('./accounts');

var costumerStore = Reflux.createStore({
    listenables: [costumerActions],
    init() {
        this.user = {};
        this.listenTo(accountStore, this.setUser);
    },

    getInitialState() {
        this.costumers = [];
        return this.costumers;
    },

    setUser(user) {
        var self = this;
        this.user = user;
        request("/api/v1/accounts/" + this.user.username + "/costumers/")
            .end(function (err, res) {
                self.costumers = res.body;
                self.trigger(self.costumers);
            });
    }
});

module.exports = costumerStore;
