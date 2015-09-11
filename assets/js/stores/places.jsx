'use strict';
var React = require('react/addons');
var Reflux = require('reflux');
var request = require('superagent');
var placeActions = require('../actions/place');

var placeStore = Reflux.createStore({
    listenables: placeActions,

    getInitialState() {
        this.places = [];
        return this.places;
    },

    onListCompany(company) {
        var self = this;
        request("/api/v1/places/")
            .query({
                company: company.id
            })
            .end((err, res) => {
                self.places = res.body;
                self.trigger(self.places);
            });
    }
});

module.exports = placeStore;
