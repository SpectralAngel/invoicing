'use strict';
var React = require('react/addons');
var Reflux = require('reflux');

var Companies = require('./components/company/companies');
var CostumerTable = require('./components/costumer/table');

var AccountStore = require('./stores/accounts');
var AccountAcctions = require('./actions/account');

var Account = React.createClass({
    mixins: [Reflux.connect(AccountStore, 'user')],
    render() {
        return <div>
            <h1>{this.state.user.username}</h1>
            <div className="row">
                <Companies user={this.state.user} />
            </div>
            <div className="row">
                <CostumerTable />
            </div>
        </div>;
    }
});

module.exports = Account;
