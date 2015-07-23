var React = require('react');
var Costumers = require('./costumers');
var Costumer = require('./costumer');
var Companies = require('./company');

var App = React.createClass({
    getInitialState: function() {
        return {
            costumers: {},
            companies: {}
        };
    },
    componentDidMount: function() {
        var self = this;
        $.getJSON('/api/v1/auth/current/user/', function(user){
            var costumers_url = "/api/v1/accounts/" + user.username + "/costumers/";
            var companies_url = "/api/v1/accounts/" + user.username + "/companies/";
            self.setState({
                costumers: <Costumers source={costumers_url} />,
                companies: <Companies source={companies_url} />
            });
        });
    },

    render: function(){

        return <div className="row">
            <div className="col-md-6 col-xs-6">
                {this.state.costumers}
            </div>
            <div className="col-md-6 col-xs-6">
                {this.state.companies}
            </div>
        </div>;
    }
});

module.exports = App;
