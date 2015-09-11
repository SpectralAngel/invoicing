var React = require('react');
var PlaceSelect = require('./components/place/placeselect');
var CostumerSelect = require('./costumerselect');

var InvoiceForm = React.createClass({
    getInitialState: function() {
        return {
            places: {},
            costumers: {},
            user: {}
        };
    },
    componentDidMount: function() {
        var self = this;
        $.getJSON('/auth/me/', function(user){
            self.setState({
                costumers_url : "/api/v1/accounts/" + user.username + "/costumers/",
                places_url : "/api/v1/accounts/" + user.username + "/places/",
                user: user
            });
        });
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var self = this;
        $.post('/api/v1/invoices/', {
            csrfmiddlewaretoken: $.cookie('csrftoken'),
            place : React.findDOMNode(self.refs.place),
            costumer : React.findDOMNode(self.refs.costumer),
            account : this.state.user.id
        });
    },

    render: function() {
        return <form onSubmit={this.handleSubmit} className="inline-form">
            <PlaceSelect source={this.state.places_url} ref="place" />
            <CostumerSelect source={this.state.costumers_url} ref="costumer" />
            <button type="submit" className="btn btn-primary">Add Invoice</button>
        </form>
    }
});

var Invoices =  React.createClass({
    render : function() {
        return <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Invoices</h3>
            </div>
            <div className="panel-body">
                <InvoiceForm />
            </div>
        </div>;
    }
});

module.exports = Invoices;
