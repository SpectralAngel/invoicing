'use strict';
var React = require('react/addons');
var Reflux = require('reflux');

var Companies = require('./components/company/companies');

var AccountStore = require('./stores/accounts');
var AccountAcctions = require('./actions/account');

var Account = React.createClass({
    mixins: [Reflux.connect(AccountStore, 'user')],
    render() {
        return <div>
            <h1>{this.state.user.username}</h1>
            <Companies user={this.state.user} />
        </div>;
    }
});

module.exports = Account;
