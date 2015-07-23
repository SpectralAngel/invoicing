var React = require('react');

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
    getInitialState: function () {
        return {places: []};
    },

    componentDidMount: function () {
        // When the component loads, send a jQuery AJAX request
        var self = this;
        var places = [];
        this.props.places.map(function (url) {
            $.getJSON(url, function (result) {

                if (!result) {
                    return;
                }
                places.push(result);
                self.setState({places: places});
            });
        });
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
                                     max_emision_date={place.max_emision_date}/>
                })}
                </tbody>
            </table>
        </div>;
    }
});

module.exports = PlaceRow;
module.exports = PlaceTable;
