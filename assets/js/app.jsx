var React = require('react');
var Costumers = require('./costumers');
var Costumer = require('./costumer');
var Companies = require('./company');
var Invoices = require('./invoices');

var App = React.createClass({
    getInitialState: function() {
        return {
            costumersDiv: {},
            companiesDiv: {}
        };
    },

    componentDidMount: function() {
        var self = this;
        $.getJSON('/api/v1/auth/current/user/', function(user){
            var costumers_url = "/api/v1/accounts/" + user.username + "/costumers/";
            var companies_url = "/api/v1/accounts/" + user.username + "/companies/";
            self.setState({
                companies_url: companies_url,
                costumers_url: costumers_url,
                places: self.state.places,
                costumers: self.state.costumers,
                companies: self.state.companies,
                costumersDiv: <Costumers source={costumers_url} />,
                companiesDiv: <Companies source={companies_url} />
            });
            $.getJSON("/api/v1/accounts/" + user.username + "/places/", function (result) {
                if (!result || !result || !result.length) {
                    return;
                }
                var places = result.map(function (p) {
                    return {
                        id: p.id,
                        name: p.name,
                        prefix: p.prefix,
                        next_receipt_number: p.next_receipt_number,
                        max_emission_date: p.max_emission_date
                    };
                });
                // Update the component's state. This will trigger a render.
                self.setState({
                    places: places,
                    costumers: self.state.costumers,
                    companies: self.state.companies
                });
            });
            $.getJSON(companies_url, function(result){

                if(!result || !result || !result.length){
                    return;
                }

                var costumers = result.map(function(c){
                    return {
                        id: c.id,
                        name: c.name,
                        rtn: c.rtn
                    };
                });

                // Update the component's state. This will trigger a render.
                self.setState({
                    places: self.state.places,
                    costumers: costumers,
                    companies: self.state.companies
                });
            });
        });
    },
    render: function(){
        return <div>
            <div className="row">
                <div className="col-md-6 col-xs-6">
                    {this.state.costumersDiv}
                </div>
                <div className="col-md-6 col-xs-6">
                    {this.state.companiesDiv}
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
