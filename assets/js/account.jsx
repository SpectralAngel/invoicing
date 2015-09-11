'use strict';
var React = require('react/addons');
var Reflux = require('reflux');

var AccountStore = require('./stores/accounts');
var AccountAcctions = require('./actions/account');

var Account = React.createClass({
    mixins: [Reflux.ListenerMixin],

    componentDidMount() {
        AccountAcctions.me();
    },

    render() {

        return <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.user.username}</h3>
            </div>
            <div className="panel-body">
                <dl></dl>
            </div>
        </div>;
    }
});

module.exports = Account;
