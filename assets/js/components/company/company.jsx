'use strict';
var React = require('react');
var Reflux = require('reflux');
var PlaceTable = require('../place/placeTable');

var Company = React.createClass({
    render: function () {
        return <div className="col-md-6 col-xs-6">
            <div className="panel panel-primary companies">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.company.name}</h3>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>RTN</dt>
                        <dd>{this.props.company.rtn}</dd>
                        <dt>CAI</dt>
                        <dd>{this.props.company.cai}</dd>
                    </dl>
                    <PlaceTable company={this.props.company} />
                </div>
            </div>
        </div>;
    }
});

module.exports = Company;
