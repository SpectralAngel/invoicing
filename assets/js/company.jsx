var React = require('react');
var PlaceTable = require('./place');

var Company = React.createClass({
    render: function () {
        return <div className="panel panel-primary companies">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.name}</h3>
            </div>
            <div className="panel-body">
                <dl>
                    <dt>RTN</dt>
                    <dd>{this.props.rtn}</dd>
                    <dt>CAI</dt>
                    <dd>{this.props.cai}</dd>
                </dl>
                <PlaceTable places={this.props.places} />
            </div>
        </div>;
    }
});

var Companies = React.createClass({
    getInitialState: function () {
        return {companies: []};
    },

    componentDidMount: function () {
        // When the component loads, send a jQuery AJAX request
        var self = this;

        $.getJSON(this.props.source, function (result) {

            if (!result || !result || !result.length) {
                return;
            }

            var companies = result.map(function (c) {
                var places = [];
                for (var i=0; i < c.place_set.length; i++) {
                    $.getJSON(c.place_set[i], function (data) {
                        places.push(data);
                    });
                }
                var company = {
                    id: c.id,
                    name: c.name,
                    rtn: c.rtn,
                    cai: c.cai,
                    places: places
                };
                console.log(company);
                return company;
            });

            // Update the component's state. This will trigger a render.
            console.log(companies);
            self.setState({companies: companies});

        });

    },

    render: function () {

        var costumers = this.state.companies.map(function (company) {
            return <Company key={company.id} name={company.name}
                            rtn={company.rtn} cai={company.cai}
                            places={company.places}/>;
        });
        return <div className="companies">
            <section className="page-header">
                <h1>Companies</h1>
            </section>
            {costumers}
        </div>;
    }
});

module.exports = Company;
module.exports = Companies;
