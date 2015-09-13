'use strict';
var React = require('react');
var Reflux = require('reflux');
var PlaceStore = require('../../stores/places');
var PlaceActions = require('../../actions/place');

var PlaceRow = React.createClass({
    render: function () {
        return <tr>
            <td>{this.props.name}</td>
            <td>{this.props.prefix}</td>
            <td>{this.props.next_receipt_number}</td>
            <td>{this.props.max_emission_date}</td>
        </tr>;
    }
});

var PlaceTable = React.createClass({
    mixins: [Reflux.connect(PlaceStore, 'places')],
    componentDidMount() {
        PlaceActions.listCompany(this.props.company);
    },
    render: function () {
        return <div className="places">
            <h2>Places</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Prefix</th>
                    <th>Next Receipt</th>
                    <th>Emission Date Limit</th>
                </tr>
                </thead>
                <tbody>
                {this.state.places.map(function (place) {
                    return <PlaceRow name={place.name} key={place.id}
                                     id={place.id}
                                     prefix={place.prefix}
                                     next_receipt_number={place.next_receipt_number}
                                     max_emission_date={place.max_emission_date}/>
                })}
                </tbody>
            </table>
        </div>;
    }
});

module.exports = PlaceTable;
