var React = require('react');

var PlaceOption = React.createClass({
    render: function () {
        return <option value="{this.props.id}">{this.props.name}</option>;
    }
});

var PlaceSelect = React.createClass({
    getInitialState: function () {
        return {places: []};
    },

    componentDidMount: function () {
        // When the component loads, send a jQuery AJAX request
        var self = this;
        $.getJSON(this.props.source, function (result) {
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
            self.setState({places: places});
        });
    },

    render: function() {
        return <select className="form-control">
            {this.state.places.map(function (place) {
                return <PlaceOption name={place.name} key={place.id} id={place.id} />
            })}
        </select>;
    }
});

module.exports = PlaceOption;
module.exports = PlaceSelect;
