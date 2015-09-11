'use strict';
var React = require('react');
var Reflux = require('reflux');
var Company = require('./company');
var CompanyStore = require('../../stores/companies');
var CompanyActions = require('../../actions/company');

var Companies = React.createClass({
    mixins: [Reflux.connect(CompanyStore, 'companies')],
    componentWillReceiveProps(nextProps) {
        CompanyActions.listAccount(nextProps.user);
    },
    render: function () {
        return <div className="companies">
            <section className="page-header">
                <h1>Companies</h1>
            </section>
            {this.state.companies.map(function (company) {
                return <Company key={company.id} company={company}/>;
            })}
        </div>;
    }
});

module.exports = Companies;
