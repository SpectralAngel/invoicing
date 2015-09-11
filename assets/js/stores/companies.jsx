'use strict';
var React = require('react/addons');
var Reflux = require('reflux');
var request = require('superagent');
var companyActions = require('../actions/company');

var companyStore = Reflux.createStore({
    listenables: companyActions,

    getInitialState() {
        this.companies = [];
        return this.companies;
    },

    onListAccount(user) {
        var self = this;
        request("/api/v1/accounts/" + user.username + "/companies/")
            .end((err, res) => {
                self.companies = res.body;
                self.trigger(self.companies);
            });
    }
});

module.exports = companyStore;
