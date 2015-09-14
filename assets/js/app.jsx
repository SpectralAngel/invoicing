'use strict';
var React = require('react');
var Reflux = require('reflux');
var Invoices = require('./invoices');
var Account = require('./account');
var AccountActions = require('./actions/account');


var App = React.createClass({

    componentDidMount: function() {
        AccountActions.me();
    },

    render: function(){
        return <div>
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <Account />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-6">
                    <Invoices />
                </div>
            </div>
        </div>;
    }
});

module.exports = App;
