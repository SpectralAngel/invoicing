'use strict';
var React = require('react');
var Reflux = require('reflux');
var PlaceTable = require('../place/placeTable');
var PlaceStore = require('../../stores/places');
var PlaceActions = require('../../actions/place');

var Company = React.createClass({
    mixins: [Reflux.connect(PlaceStore, 'places')],
    componentDidMount() {
        PlaceActions.listCompany(this.props.company);
    },
    componentWillReceiveProps(props) {
        PlaceActions.listCompany(props.company);
    },
    render: function () {
        return <div className="panel panel-primary companies">
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
                <PlaceTable places={this.state.places} />
            </div>
        </div>;
    }
});

module.exports = Company;
